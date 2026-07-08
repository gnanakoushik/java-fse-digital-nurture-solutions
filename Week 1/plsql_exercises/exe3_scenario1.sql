CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    -- Update all accounts of type 'Savings' by adding 1% interest
UPDATE Accounts
SET Balance = Balance * 1.01,
    LastModified = SYSDATE
WHERE AccountType = 'Savings';

COMMIT;
DBMS_OUTPUT.PUT_LINE('Monthly interest of 1% successfully processed for all Savings accounts.');
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error processing monthly interest: ' || SQLERRM);
END ProcessMonthlyInterest;
/