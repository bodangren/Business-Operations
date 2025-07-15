// ===================================
// Payroll Stub Generator Module
// Part of Unit 5: Payday Simulator
// ===================================

class PayrollStubGenerator {
    constructor(taxCalculator, benefitsManager) {
        this.taxCalculator = taxCalculator;
        this.benefitsManager = benefitsManager;
        
        this.payPeriods = {
            weekly: { frequency: 52, description: 'Weekly' },
            biweekly: { frequency: 26, description: 'Bi-Weekly' },
            semimonthly: { frequency: 24, description: 'Semi-Monthly' },
            monthly: { frequency: 12, description: 'Monthly' }
        };
    }

    generatePayStub(employee, payPeriod = 'biweekly', currentPayPeriod = 1, hoursWorked = null) {
        const payFrequency = this.payPeriods[payPeriod].frequency;
        
        // Calculate gross pay
        const grossPay = this.calculateGrossPay(employee, payFrequency, hoursWorked);
        
        // Calculate taxes
        const ytdGross = grossPay * (currentPayPeriod - 1);
        const taxes = this.taxCalculator.calculateAllTaxes(
            grossPay, 
            employee.annualSalary || (grossPay * payFrequency), 
            ytdGross, 
            payFrequency
        );

        // Calculate benefits
        const benefitPackage = this.benefitsManager.calculateTotalBenefitPackage(employee);
        const benefitDeductions = this.benefitsManager.calculateBiweeklyDeductions(benefitPackage);

        // Calculate net pay
        const totalDeductions = taxes.totalEmployee + benefitDeductions.totalBiweeklyDeduction;
        const netPay = grossPay - totalDeductions;

        // Generate pay stub data
        const payStub = {
            header: this.generateHeader(employee, currentPayPeriod, payPeriod),
            earnings: this.generateEarningsSection(employee, grossPay, hoursWorked, payFrequency),
            taxes: this.generateTaxSection(taxes),
            benefits: this.generateBenefitsSection(benefitDeductions),
            summary: this.generateSummarySection(grossPay, totalDeductions, netPay),
            ytd: this.generateYTDSection(employee, currentPayPeriod, grossPay, taxes, benefitDeductions),
            footer: this.generateFooter()
        };

        return payStub;
    }

    calculateGrossPay(employee, payFrequency, hoursWorked = null) {
        if (employee.hourlyRate && hoursWorked !== null) {
            // Hourly employee
            let regularHours = Math.min(hoursWorked, 40);
            let overtimeHours = Math.max(0, hoursWorked - 40);
            
            let grossPay = (regularHours * employee.hourlyRate) + 
                          (overtimeHours * employee.hourlyRate * 1.5);
            
            return grossPay;
        } else if (employee.annualSalary) {
            // Salaried employee
            return employee.annualSalary / payFrequency;
        } else {
            throw new Error('Employee must have either hourlyRate or annualSalary defined');
        }
    }

    generateHeader(employee, payPeriod, frequency) {
        const payDate = new Date();
        const periodStart = new Date(payDate);
        const periodEnd = new Date(payDate);
        
        // Calculate pay period dates based on frequency
        if (frequency === 'biweekly') {
            periodStart.setDate(payDate.getDate() - 13);
        } else if (frequency === 'weekly') {
            periodStart.setDate(payDate.getDate() - 6);
        } else if (frequency === 'monthly') {
            periodStart.setDate(1);
        }

        return {
            company: 'TechStart Solutions',
            address: '123 Innovation Drive, San Francisco, CA 94105',
            employee: {
                name: employee.name,
                id: employee.id || 'EMP001',
                position: employee.position,
                department: employee.department || 'General'
            },
            payPeriod: {
                number: payPeriod,
                frequency: this.payPeriods[frequency].description,
                startDate: this.formatDate(periodStart),
                endDate: this.formatDate(periodEnd),
                payDate: this.formatDate(payDate)
            }
        };
    }

    generateEarningsSection(employee, grossPay, hoursWorked, payFrequency) {
        const earnings = [];

        if (employee.hourlyRate && hoursWorked !== null) {
            const regularHours = Math.min(hoursWorked, 40);
            const overtimeHours = Math.max(0, hoursWorked - 40);
            
            earnings.push({
                description: 'Regular Pay',
                rate: employee.hourlyRate,
                hours: regularHours,
                amount: regularHours * employee.hourlyRate
            });

            if (overtimeHours > 0) {
                earnings.push({
                    description: 'Overtime Pay (1.5x)',
                    rate: employee.hourlyRate * 1.5,
                    hours: overtimeHours,
                    amount: overtimeHours * employee.hourlyRate * 1.5
                });
            }
        } else {
            earnings.push({
                description: 'Salary',
                rate: employee.annualSalary,
                hours: null,
                amount: grossPay
            });
        }

        // Add any bonuses or additional compensation
        if (employee.bonus) {
            earnings.push({
                description: 'Bonus',
                rate: null,
                hours: null,
                amount: employee.bonus
            });
        }

        return {
            items: earnings,
            totalGross: grossPay
        };
    }

    generateTaxSection(taxes) {
        return {
            federal: {
                description: 'Federal Income Tax',
                amount: taxes.federalIncome,
                rate: 'Progressive'
            },
            socialSecurity: {
                description: 'Social Security',
                amount: taxes.socialSecurity,
                rate: '6.2%'
            },
            medicare: {
                description: 'Medicare',
                amount: taxes.medicare,
                rate: '1.45%'
            },
            state: {
                description: 'State Income Tax',
                amount: taxes.stateIncome,
                rate: 'Progressive'
            },
            stateDisability: {
                description: 'State Disability',
                amount: taxes.stateDisability,
                rate: '0.9%'
            },
            totalTaxes: taxes.totalEmployee
        };
    }

    generateBenefitsSection(benefitDeductions) {
        const benefits = [];

        Object.entries(benefitDeductions.deductions).forEach(([benefitType, deduction]) => {
            benefits.push({
                description: this.formatBenefitDescription(benefitType),
                amount: deduction.amount,
                isPreTax: deduction.isPreTax
            });
        });

        return {
            items: benefits,
            totalBenefits: benefitDeductions.totalBiweeklyDeduction
        };
    }

    generateSummarySection(grossPay, totalDeductions, netPay) {
        return {
            grossPay,
            totalDeductions,
            netPay,
            effectiveRate: (totalDeductions / grossPay) * 100
        };
    }

    generateYTDSection(employee, currentPayPeriod, grossPay, taxes, benefitDeductions) {
        const ytdGross = grossPay * currentPayPeriod;
        const ytdTaxes = taxes.totalEmployee * currentPayPeriod;
        const ytdBenefits = benefitDeductions.totalBiweeklyDeduction * currentPayPeriod;
        const ytdNet = ytdGross - ytdTaxes - ytdBenefits;

        return {
            gross: ytdGross,
            taxes: ytdTaxes,
            benefits: ytdBenefits,
            net: ytdNet,
            payPeriodsCompleted: currentPayPeriod
        };
    }

    generateFooter() {
        return {
            disclaimer: 'This is an educational simulation. Actual payroll calculations may vary.',
            generatedDate: this.formatDate(new Date()),
            version: '1.0'
        };
    }

    formatBenefitDescription(benefitType) {
        const descriptions = {
            health: 'Health Insurance',
            dental: 'Dental Insurance',
            vision: 'Vision Insurance',
            retirement401k: '401(k) Contribution',
            hsa: 'HSA Contribution',
            fsa: 'FSA Contribution'
        };
        return descriptions[benefitType] || benefitType;
    }

    formatDate(date) {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(amount);
    }

    renderPayStubHTML(payStub) {
        return `
            <div class="pay-stub">
                <div class="pay-stub-header">
                    <div class="company-info">
                        <h2>${payStub.header.company}</h2>
                        <p>${payStub.header.address}</p>
                    </div>
                    <div class="pay-period-info">
                        <h3>Pay Statement</h3>
                        <p>Pay Period: ${payStub.header.payPeriod.startDate} - ${payStub.header.payPeriod.endDate}</p>
                        <p>Pay Date: ${payStub.header.payPeriod.payDate}</p>
                        <p>Frequency: ${payStub.header.payPeriod.frequency}</p>
                    </div>
                </div>

                <div class="employee-info">
                    <div class="employee-details">
                        <p><strong>Employee:</strong> ${payStub.header.employee.name}</p>
                        <p><strong>ID:</strong> ${payStub.header.employee.id}</p>
                    </div>
                    <div class="position-details">
                        <p><strong>Position:</strong> ${payStub.header.employee.position}</p>
                        <p><strong>Department:</strong> ${payStub.header.employee.department}</p>
                    </div>
                </div>

                <div class="pay-stub-body">
                    <div class="earnings-section">
                        <h4>Earnings</h4>
                        <table class="pay-table">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Rate</th>
                                    <th>Hours</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${payStub.earnings.items.map(item => `
                                    <tr>
                                        <td>${item.description}</td>
                                        <td>${item.rate ? this.formatCurrency(item.rate) : '-'}</td>
                                        <td>${item.hours !== null ? item.hours.toFixed(2) : '-'}</td>
                                        <td>${this.formatCurrency(item.amount)}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                            <tfoot>
                                <tr class="total-row">
                                    <td colspan="3"><strong>Total Gross Pay</strong></td>
                                    <td><strong>${this.formatCurrency(payStub.earnings.totalGross)}</strong></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div class="deductions-section">
                        <div class="taxes-deductions">
                            <h4>Tax Deductions</h4>
                            <table class="pay-table">
                                <tbody>
                                    <tr>
                                        <td>${payStub.taxes.federal.description}</td>
                                        <td>${payStub.taxes.federal.rate}</td>
                                        <td>${this.formatCurrency(payStub.taxes.federal.amount)}</td>
                                    </tr>
                                    <tr>
                                        <td>${payStub.taxes.socialSecurity.description}</td>
                                        <td>${payStub.taxes.socialSecurity.rate}</td>
                                        <td>${this.formatCurrency(payStub.taxes.socialSecurity.amount)}</td>
                                    </tr>
                                    <tr>
                                        <td>${payStub.taxes.medicare.description}</td>
                                        <td>${payStub.taxes.medicare.rate}</td>
                                        <td>${this.formatCurrency(payStub.taxes.medicare.amount)}</td>
                                    </tr>
                                    <tr>
                                        <td>${payStub.taxes.state.description}</td>
                                        <td>${payStub.taxes.state.rate}</td>
                                        <td>${this.formatCurrency(payStub.taxes.state.amount)}</td>
                                    </tr>
                                    <tr>
                                        <td>${payStub.taxes.stateDisability.description}</td>
                                        <td>${payStub.taxes.stateDisability.rate}</td>
                                        <td>${this.formatCurrency(payStub.taxes.stateDisability.amount)}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr class="total-row">
                                        <td><strong>Total Taxes</strong></td>
                                        <td></td>
                                        <td><strong>${this.formatCurrency(payStub.taxes.totalTaxes)}</strong></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

                        ${payStub.benefits.items.length > 0 ? `
                        <div class="benefits-deductions">
                            <h4>Benefit Deductions</h4>
                            <table class="pay-table">
                                <tbody>
                                    ${payStub.benefits.items.map(item => `
                                        <tr>
                                            <td>${item.description}</td>
                                            <td>${item.isPreTax ? 'Pre-Tax' : 'Post-Tax'}</td>
                                            <td>${this.formatCurrency(item.amount)}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                                <tfoot>
                                    <tr class="total-row">
                                        <td><strong>Total Benefits</strong></td>
                                        <td></td>
                                        <td><strong>${this.formatCurrency(payStub.benefits.totalBenefits)}</strong></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        ` : ''}
                    </div>

                    <div class="summary-section">
                        <table class="pay-table summary-table">
                            <tbody>
                                <tr>
                                    <td><strong>Gross Pay</strong></td>
                                    <td><strong>${this.formatCurrency(payStub.summary.grossPay)}</strong></td>
                                    <td><strong>YTD: ${this.formatCurrency(payStub.ytd.gross)}</strong></td>
                                </tr>
                                <tr>
                                    <td>Total Deductions</td>
                                    <td>${this.formatCurrency(payStub.summary.totalDeductions)}</td>
                                    <td>YTD: ${this.formatCurrency(payStub.ytd.taxes + payStub.ytd.benefits)}</td>
                                </tr>
                                <tr class="net-pay-row">
                                    <td><strong>Net Pay</strong></td>
                                    <td><strong>${this.formatCurrency(payStub.summary.netPay)}</strong></td>
                                    <td><strong>YTD: ${this.formatCurrency(payStub.ytd.net)}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                        <p class="effective-rate">Effective Tax Rate: ${payStub.summary.effectiveRate.toFixed(2)}%</p>
                    </div>
                </div>

                <div class="pay-stub-footer">
                    <p>${payStub.footer.disclaimer}</p>
                    <p>Generated: ${payStub.footer.generatedDate} | Version: ${payStub.footer.version}</p>
                </div>
            </div>
        `;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PayrollStubGenerator;
} else {
    window.PayrollStubGenerator = PayrollStubGenerator;
}