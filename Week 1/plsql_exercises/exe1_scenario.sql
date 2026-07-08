DECLARE
-- Cursor to fetch loan records along with the customer's date of birth (DOB)
CURSOR c_senior_loans IS
SELECT l.LoanID, l.InterestRate, c.DOB
FROM Loans l
         JOIN Customers c ON l.CustomerID = c.CustomerID;

v_age NUMBER;
BEGIN
FOR r_loan IN c_senior_loans LOOP
        -- Calculate age based on current date and Date of Birth
        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, r_loan.DOB) / 12);

        -- If customer is over 60, apply a 1% discount
        IF v_age > 60 THEN
UPDATE Loans
SET InterestRate = InterestRate - 1
WHERE LoanID = r_loan.LoanID;

DBMS_OUTPUT.PUT_LINE('Applied 1% discount to Loan ID: ' || r_loan.LoanID || '. New Rate: ' || (r_loan.InterestRate - 1) || '%');
END IF;
END LOOP;

COMMIT;
END;
/