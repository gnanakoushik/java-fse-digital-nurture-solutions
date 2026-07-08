CREATE OR REPLACE PROCEDURE TransferFunds (
    p_SourceAccountID IN NUMBER,
    p_DestAccountID   IN NUMBER,
    p_Amount          IN NUMBER
) IS
    v_SourceBalance NUMBER;
BEGIN
    -- Fetch the balance of the source account to check availability
SELECT Balance INTO v_SourceBalance
FROM Accounts
WHERE AccountID = p_SourceAccountID;

-- Check if sufficient funds exist
IF v_SourceBalance >= p_Amount THEN
        -- Deduct from sender
UPDATE Accounts
SET Balance = Balance - p_Amount, LastModified = SYSDATE
WHERE AccountID = p_SourceAccountID;

-- Add to receiver
UPDATE Accounts
SET Balance = Balance + p_Amount, LastModified = SYSDATE
WHERE AccountID = p_DestAccountID;

COMMIT;
DBMS_OUTPUT.PUT_LINE('Successfully transferred $' || p_Amount || ' from Account ' || p_SourceAccountID || ' to ' || p_DestAccountID);
ELSE
        DBMS_OUTPUT.PUT_LINE('Transfer Denied: Account ' || p_SourceAccountID || ' has insufficient funds.');
END IF;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: Invalid source or destination Account ID.');
WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transaction Error encountered: ' || SQLERRM);
END TransferFunds;
/