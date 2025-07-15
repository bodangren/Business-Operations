// ===================================
// Payroll Benefits Manager Module
// Part of Unit 5: Payday Simulator
// ===================================

class PayrollBenefitsManager {
    constructor() {
        // Standard benefit plans
        this.benefitPlans = {
            health: {
                employee_only: { premium: 280, employer_contribution: 0.80 },
                employee_spouse: { premium: 560, employer_contribution: 0.75 },
                employee_family: { premium: 840, employer_contribution: 0.70 }
            },
            dental: {
                employee_only: { premium: 35, employer_contribution: 0.90 },
                employee_spouse: { premium: 70, employer_contribution: 0.85 },
                employee_family: { premium: 105, employer_contribution: 0.80 }
            },
            vision: {
                employee_only: { premium: 15, employer_contribution: 1.00 },
                employee_spouse: { premium: 30, employer_contribution: 0.95 },
                employee_family: { premium: 45, employer_contribution: 0.90 }
            },
            life: {
                basic: { premium: 25, employer_contribution: 1.00 },
                supplemental_1x: { premium: 15, employer_contribution: 0.00 },
                supplemental_2x: { premium: 30, employer_contribution: 0.00 }
            },
            disability: {
                short_term: { premium: 45, employer_contribution: 0.60 },
                long_term: { premium: 25, employer_contribution: 0.80 }
            }
        };

        // 401(k) plan details
        this.retirement401k = {
            maxContribution2024: 23000,
            catchUpLimit: 7500, // Age 50+
            maxEmployerMatch: 0.06, // 6% of salary
            vestingSchedule: {
                year1: 0.20,
                year2: 0.40,
                year3: 0.60,
                year4: 0.80,
                year5: 1.00
            }
        };

        // HSA and FSA limits
        this.pretaxAccounts = {
            hsa: {
                individual_limit: 4150,
                family_limit: 8300,
                catchup_50plus: 1000,
                employer_contribution: 500
            },
            fsa: {
                healthcare_limit: 3050,
                dependent_care_limit: 5000
            }
        };
    }

    calculateHealthBenefits(plan, coverage, isPreTax = true) {
        const planData = this.benefitPlans.health[coverage];
        if (!planData) return null;

        const totalPremium = planData.premium;
        const employerContribution = totalPremium * planData.employer_contribution;
        const employeeContribution = totalPremium - employerContribution;

        return {
            totalPremium,
            employerContribution,
            employeeContribution,
            isPreTax,
            taxSavings: isPreTax ? employeeContribution * 0.25 : 0 // Estimated 25% tax bracket
        };
    }

    calculateDentalBenefits(coverage, isPreTax = true) {
        return this.calculateStandardBenefit('dental', coverage, isPreTax);
    }

    calculateVisionBenefits(coverage, isPreTax = true) {
        return this.calculateStandardBenefit('vision', coverage, isPreTax);
    }

    calculateStandardBenefit(benefitType, coverage, isPreTax = true) {
        const planData = this.benefitPlans[benefitType][coverage];
        if (!planData) return null;

        const totalPremium = planData.premium;
        const employerContribution = totalPremium * planData.employer_contribution;
        const employeeContribution = totalPremium - employerContribution;

        return {
            benefitType,
            coverage,
            totalPremium,
            employerContribution,
            employeeContribution,
            isPreTax,
            taxSavings: isPreTax ? employeeContribution * 0.25 : 0
        };
    }

    calculate401kContribution(annualSalary, employeeContribPercentage, yearsOfService = 1) {
        const maxEmployeeContrib = Math.min(
            annualSalary * (employeeContribPercentage / 100),
            this.retirement401k.maxContribution2024
        );

        const employerMatchPercentage = Math.min(
            employeeContribPercentage / 100,
            this.retirement401k.maxEmployerMatch
        );
        
        const employerMatch = annualSalary * employerMatchPercentage;
        
        // Apply vesting schedule
        const vestingPercentage = this.getVestingPercentage(yearsOfService);
        const vestedEmployerMatch = employerMatch * vestingPercentage;

        return {
            employeeContribution: maxEmployeeContrib,
            employerMatch,
            vestedEmployerMatch,
            vestingPercentage,
            totalAnnualContribution: maxEmployeeContrib + vestedEmployerMatch,
            taxSavings: maxEmployeeContrib * 0.25, // Estimated tax savings
            payrollDeduction: maxEmployeeContrib / 26 // Biweekly
        };
    }

    getVestingPercentage(yearsOfService) {
        const schedule = this.retirement401k.vestingSchedule;
        
        if (yearsOfService >= 5) return schedule.year5;
        if (yearsOfService >= 4) return schedule.year4;
        if (yearsOfService >= 3) return schedule.year3;
        if (yearsOfService >= 2) return schedule.year2;
        return schedule.year1;
    }

    calculateHSAContribution(contributionAmount, age = 30, isFamily = false) {
        const limit = isFamily ? 
            this.pretaxAccounts.hsa.family_limit : 
            this.pretaxAccounts.hsa.individual_limit;
        
        const catchUpBonus = age >= 50 ? this.pretaxAccounts.hsa.catchup_50plus : 0;
        const maxContribution = limit + catchUpBonus;
        
        const actualContribution = Math.min(contributionAmount, maxContribution);
        const employerContribution = this.pretaxAccounts.hsa.employer_contribution;
        
        return {
            employeeContribution: actualContribution,
            employerContribution,
            totalContribution: actualContribution + employerContribution,
            taxSavings: actualContribution * 0.32, // Federal + FICA savings
            payrollDeduction: actualContribution / 26,
            remainingLimit: maxContribution - actualContribution
        };
    }

    calculateFSAContribution(contributionAmount, accountType = 'healthcare') {
        const limit = this.pretaxAccounts.fsa[accountType + '_limit'];
        const actualContribution = Math.min(contributionAmount, limit);
        
        return {
            contributionAmount: actualContribution,
            limit,
            taxSavings: actualContribution * 0.32,
            payrollDeduction: actualContribution / 26,
            useItOrLose: true,
            rolloverLimit: accountType === 'healthcare' ? 610 : 0
        };
    }

    calculateTotalBenefitPackage(employee) {
        const benefits = {};
        let totalEmployeeCost = 0;
        let totalEmployerCost = 0;
        let totalTaxSavings = 0;

        // Health insurance
        if (employee.benefits.health) {
            benefits.health = this.calculateHealthBenefits(
                'health', 
                employee.benefits.health.coverage,
                employee.benefits.health.preTax
            );
            totalEmployeeCost += benefits.health.employeeContribution;
            totalEmployerCost += benefits.health.employerContribution;
            totalTaxSavings += benefits.health.taxSavings;
        }

        // Dental insurance
        if (employee.benefits.dental) {
            benefits.dental = this.calculateDentalBenefits(
                employee.benefits.dental.coverage,
                employee.benefits.dental.preTax
            );
            totalEmployeeCost += benefits.dental.employeeContribution;
            totalEmployerCost += benefits.dental.employerContribution;
            totalTaxSavings += benefits.dental.taxSavings;
        }

        // 401(k)
        if (employee.benefits.retirement401k) {
            benefits.retirement401k = this.calculate401kContribution(
                employee.annualSalary,
                employee.benefits.retirement401k.percentage,
                employee.yearsOfService || 1
            );
            totalEmployeeCost += benefits.retirement401k.employeeContribution;
            totalEmployerCost += benefits.retirement401k.vestedEmployerMatch;
            totalTaxSavings += benefits.retirement401k.taxSavings;
        }

        // HSA
        if (employee.benefits.hsa) {
            benefits.hsa = this.calculateHSAContribution(
                employee.benefits.hsa.contribution,
                employee.age,
                employee.benefits.hsa.isFamily
            );
            totalEmployeeCost += benefits.hsa.employeeContribution;
            totalEmployerCost += benefits.hsa.employerContribution;
            totalTaxSavings += benefits.hsa.taxSavings;
        }

        return {
            benefits,
            summary: {
                totalEmployeeCost,
                totalEmployerCost,
                totalPackageValue: totalEmployeeCost + totalEmployerCost,
                totalTaxSavings,
                netEmployeeCost: totalEmployeeCost - totalTaxSavings
            }
        };
    }

    generateBenefitsStatement(employee, benefitPackage) {
        const statement = {
            employee: employee.name,
            period: new Date().getFullYear(),
            breakdown: [],
            totals: benefitPackage.summary
        };

        Object.entries(benefitPackage.benefits).forEach(([benefitType, benefit]) => {
            statement.breakdown.push({
                benefit: this.formatBenefitName(benefitType),
                employeeContribution: benefit.employeeContribution || 0,
                employerContribution: benefit.employerContribution || benefit.vestedEmployerMatch || 0,
                taxSavings: benefit.taxSavings || 0,
                totalValue: (benefit.employeeContribution || 0) + 
                           (benefit.employerContribution || benefit.vestedEmployerMatch || 0)
            });
        });

        return statement;
    }

    formatBenefitName(benefitType) {
        const names = {
            health: 'Health Insurance',
            dental: 'Dental Insurance',
            vision: 'Vision Insurance',
            retirement401k: '401(k) Retirement Plan',
            hsa: 'Health Savings Account',
            fsa: 'Flexible Spending Account'
        };
        return names[benefitType] || benefitType;
    }

    calculateBiweeklyDeductions(benefitPackage) {
        const deductions = {};
        let totalBiweeklyDeduction = 0;

        Object.entries(benefitPackage.benefits).forEach(([benefitType, benefit]) => {
            let biweeklyAmount = 0;
            
            if (benefit.employeeContribution) {
                biweeklyAmount = benefit.employeeContribution / 26;
            } else if (benefit.payrollDeduction) {
                biweeklyAmount = benefit.payrollDeduction;
            }

            if (biweeklyAmount > 0) {
                deductions[benefitType] = {
                    amount: biweeklyAmount,
                    isPreTax: benefit.isPreTax !== false
                };
                totalBiweeklyDeduction += biweeklyAmount;
            }
        });

        return {
            deductions,
            totalBiweeklyDeduction,
            annualDeduction: totalBiweeklyDeduction * 26
        };
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PayrollBenefitsManager;
} else {
    window.PayrollBenefitsManager = PayrollBenefitsManager;
}