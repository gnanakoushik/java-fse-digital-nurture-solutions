CREATE OR REPLACE PROCEDURE SafeTransferFunds (
    p_SourceAccountID IN NUMBER,
    p_DestAccountID   IN NUMBER,
    p_Amount          IN NUMBER
) IS
    v_SourceBalance NUMBER;
    -- Define a custom exception for business logic rule
    e_InsufficientFunds EXCEPTION;
BEGIN
    -- 1. Check the balance of the source account
SELECT Balance INTO v_SourceBalance
FROM Accounts
WHERE AccountID = p_SourceAccountID;

-- 2. Enforce sufficient funds rule
IF v_SourceBalance < p_Amount THEN
        RAISE e_InsufficientFunds;
END IF;

    -- 3. Deduct from source account
UPDATE Accounts
SET Balance = Balance - p_Amount, LastModified = SYSDATE
WHERE AccountID = p_SourceAccountID;

-- 4. Add to destination account
UPDATE Accounts
SET Balance = Balance + p_Amount, LastModified = SYSDATE
WHERE AccountID = p_DestAccountID;

-- If everything is successful, commit transaction
COMMIT;
DBMS_OUTPUT.PUT_LINE('Transfer successful: $' || p_Amount || ' moved from Account ' || p_SourceAccountID || ' to ' || p_DestAccountID);

EXCEPTION
    WHEN e_InsufficientFunds THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: Transfer failed due to insufficient funds in Account ' || p_SourceAccountID);
WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: One or both of the account IDs do not exist.');
WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('An unexpected database error occurred: ' || SQLERRM);
END SafeTransferFunds;
/