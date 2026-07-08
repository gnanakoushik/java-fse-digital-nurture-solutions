CREATE OR REPLACE FUNCTION CalculateMonthlyInstallment (
    p_LoanAmount   IN NUMBER,
    p_InterestRate IN NUMBER,
    p_DurationYears IN NUMBER
) RETURN NUMBER IS
    v_MonthlyRate NUMBER;
    v_TotalMonths NUMBER;
    v_Installment NUMBER;
BEGIN
    -- Convert annual interest rate to monthly decimal (e.g., 5% -> 0.05 / 12)
    v_MonthlyRate := (p_InterestRate / 100) / 12;
    v_TotalMonths := p_DurationYears * 12;

    -- Handle scenario where interest rate is 0
    IF v_MonthlyRate = 0 THEN
        v_Installment := p_LoanAmount / v_TotalMonths;
ELSE
        -- Standard loan amortization formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
        v_Installment := p_LoanAmount * (v_MonthlyRate * POWER(1 + v_MonthlyRate, v_TotalMonths)) /
                         (POWER(1 + v_MonthlyRate, v_TotalMonths) - 1);
END IF;

RETURN ROUND(v_Installment, 2);
END CalculateMonthlyInstallment;
/