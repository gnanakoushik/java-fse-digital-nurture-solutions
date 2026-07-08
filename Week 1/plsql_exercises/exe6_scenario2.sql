DECLARE
-- Explicit cursor to retrieve account balances for fee processing
CURSOR c_accounts IS
SELECT AccountID, Balance
FROM Accounts;

v_fee CONSTANT NUMBER := 50.00; -- Set annual fee amount
BEGIN
FOR r_acc IN c_accounts LOOP
        -- Deduct the maintenance fee from each account profile
UPDATE Accounts
SET Balance = Balance - v_fee,
    LastModified = SYSDATE
WHERE AccountID = r_acc.AccountID;

DBMS_OUTPUT.PUT_LINE('Deducted $' || v_fee || ' annual fee from Account ID: ' || r_acc.AccountID);
END LOOP;

COMMIT;
END;
/