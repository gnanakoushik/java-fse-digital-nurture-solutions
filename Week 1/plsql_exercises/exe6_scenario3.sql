DECLARE
-- Explicit cursor to capture loan details for modification
CURSOR c_loans IS
SELECT LoanID, InterestRate
FROM Loans;
BEGIN
FOR r_loan IN c_loans LOOP
        -- Apply a policy increase of 0.50% across the board
UPDATE Loans
SET InterestRate = InterestRate + 0.50
WHERE LoanID = r_loan.LoanID;

DBMS_OUTPUT.PUT_LINE('Updated Interest Rate for Loan ID ' || r_loan.LoanID || ' to ' || (r_loan.InterestRate + 0.50) || '%');
END LOOP;

COMMIT;
END;
/