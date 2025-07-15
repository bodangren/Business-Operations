// ===================================
// Payroll Tax Calculator Module
// Part of Unit 5: Payday Simulator
// ===================================

class PayrollTaxCalculator {
    constructor() {
        // 2024 Federal Tax Brackets (Single Filer)
        this.federalTaxBrackets = [
            { min: 0, max: 11000, rate: 0.10 },
            { min: 11000, max: 44725, rate: 0.12 },
            { min: 44725, max: 95375, rate: 0.22 },
            { min: 95375, max: 182050, rate: 0.24 },
            { min: 182050, max: 231250, rate: 0.32 },
            { min: 231250, max: 578125, rate: 0.35 },
            { min: 578125, max: Infinity, rate: 0.37 }
        ];

        // FICA rates
        this.ficaRates = {
            socialSecurity: 0.062, // 6.2%
            medicare: 0.0145, // 1.45%
            additionalMedicare: 0.009 // 0.9% for high earners
        };

        // Income limits
        this.incomeLimits = {
            socialSecurityWageBase: 160200, // 2024 limit
            additionalMedicareThreshold: 200000 // Single filer
        };

        // State tax rates (simplified - using California as example)
        this.stateTaxBrackets = [
            { min: 0, max: 9275, rate: 0.01 },
            { min: 9275, max: 22108, rate: 0.02 },
            { min: 22108, max: 34892, rate: 0.04 },
            { min: 34892, max: 48435, rate: 0.06 },
            { min: 48435, max: 61214, rate: 0.08 },
            { min: 61214, max: 312686, rate: 0.093 },
            { min: 312686, max: 375221, rate: 0.103 },
            { min: 375221, max: 625369, rate: 0.113 },
            { min: 625369, max: Infinity, rate: 0.123 }
        ];

        // Other rates
        this.otherRates = {
            stateDisability: 0.009, // CA SDI
            unemployment: 0.006, // FUTA
            stateUnemployment: 0.034 // CA SUI (employer only)
        };
    }

    calculateFederalTax(annualIncome, payPeriods = 26) {
        const grossPay = annualIncome / payPeriods;
        const annualizedGross = grossPay * payPeriods;
        
        let tax = 0;
        for (const bracket of this.federalTaxBrackets) {
            if (annualizedGross > bracket.min) {
                const taxableIncome = Math.min(annualizedGross, bracket.max) - bracket.min;
                tax += taxableIncome * bracket.rate;
            }
        }
        
        return tax / payPeriods; // Return per-paycheck amount
    }

    calculateSocialSecurityTax(grossPay, ytdGross = 0) {
        const remainingWageBase = Math.max(0, this.incomeLimits.socialSecurityWageBase - ytdGross);
        const taxableAmount = Math.min(grossPay, remainingWageBase);
        return taxableAmount * this.ficaRates.socialSecurity;
    }

    calculateMedicareTax(grossPay, ytdGross = 0, annualIncome = 0) {
        let medicareTax = grossPay * this.ficaRates.medicare;
        
        // Additional Medicare tax for high earners
        if (annualIncome > this.incomeLimits.additionalMedicareThreshold) {
            const additionalTaxableAmount = Math.min(
                grossPay,
                Math.max(0, ytdGross + grossPay - this.incomeLimits.additionalMedicareThreshold)
            );
            medicareTax += additionalTaxableAmount * this.ficaRates.additionalMedicare;
        }
        
        return medicareTax;
    }

    calculateStateTax(annualIncome, payPeriods = 26) {
        const grossPay = annualIncome / payPeriods;
        const annualizedGross = grossPay * payPeriods;
        
        let tax = 0;
        for (const bracket of this.stateTaxBrackets) {
            if (annualizedGross > bracket.min) {
                const taxableIncome = Math.min(annualizedGross, bracket.max) - bracket.min;
                tax += taxableIncome * bracket.rate;
            }
        }
        
        return tax / payPeriods;
    }

    calculateStateDisabilityTax(grossPay) {
        const maxWageBase = 153164; // 2024 CA SDI wage base
        const taxableAmount = Math.min(grossPay, maxWageBase / 26); // Assuming biweekly
        return taxableAmount * this.otherRates.stateDisability;
    }

    calculateUnemploymentTax(grossPay) {
        const federalWageBase = 7000; // Annual FUTA wage base
        const maxPaycheckAmount = federalWageBase / 26; // Assuming biweekly
        const taxableAmount = Math.min(grossPay, maxPaycheckAmount);
        return taxableAmount * this.otherRates.unemployment;
    }

    calculateAllTaxes(grossPay, annualIncome, ytdGross = 0, payPeriods = 26) {
        const taxes = {
            federalIncome: this.calculateFederalTax(annualIncome, payPeriods),
            socialSecurity: this.calculateSocialSecurityTax(grossPay, ytdGross),
            medicare: this.calculateMedicareTax(grossPay, ytdGross, annualIncome),
            stateIncome: this.calculateStateTax(annualIncome, payPeriods),
            stateDisability: this.calculateStateDisabilityTax(grossPay),
            unemployment: this.calculateUnemploymentTax(grossPay)
        };

        taxes.totalEmployee = taxes.federalIncome + taxes.socialSecurity + 
                             taxes.medicare + taxes.stateIncome + taxes.stateDisability;
        
        taxes.totalEmployer = taxes.socialSecurity + taxes.medicare + taxes.unemployment;
        
        taxes.netPay = grossPay - taxes.totalEmployee;

        return taxes;
    }

    getEffectiveTaxRate(grossPay, taxes) {
        return taxes.totalEmployee / grossPay;
    }

    getTaxBreakdown(taxes) {
        return {
            'Federal Income Tax': {
                amount: taxes.federalIncome,
                rate: 'Progressive',
                type: 'Employee'
            },
            'Social Security': {
                amount: taxes.socialSecurity,
                rate: '6.2%',
                type: 'Employee + Employer'
            },
            'Medicare': {
                amount: taxes.medicare,
                rate: '1.45%+',
                type: 'Employee + Employer'
            },
            'State Income Tax': {
                amount: taxes.stateIncome,
                rate: 'Progressive',
                type: 'Employee'
            },
            'State Disability': {
                amount: taxes.stateDisability,
                rate: '0.9%',
                type: 'Employee'
            },
            'Unemployment': {
                amount: taxes.unemployment,
                rate: '0.6%',
                type: 'Employer Only'
            }
        };
    }

    calculateYearToDateProjection(grossPay, payPeriod, currentPayPeriod) {
        const remainingPayPeriods = payPeriod - currentPayPeriod;
        const ytdGross = grossPay * currentPayPeriod;
        const projectedAnnual = grossPay * payPeriod;
        
        const currentTaxes = this.calculateAllTaxes(grossPay, projectedAnnual, ytdGross, payPeriod);
        const ytdTaxes = {
            federalIncome: currentTaxes.federalIncome * currentPayPeriod,
            socialSecurity: currentTaxes.socialSecurity * currentPayPeriod,
            medicare: currentTaxes.medicare * currentPayPeriod,
            stateIncome: currentTaxes.stateIncome * currentPayPeriod,
            stateDisability: currentTaxes.stateDisability * currentPayPeriod
        };

        return {
            ytdGross,
            ytdTaxes,
            projectedAnnual,
            remainingPayPeriods,
            effectiveRate: this.getEffectiveTaxRate(grossPay, currentTaxes)
        };
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PayrollTaxCalculator;
} else {
    window.PayrollTaxCalculator = PayrollTaxCalculator;
}