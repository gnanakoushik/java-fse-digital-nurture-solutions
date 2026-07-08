CREATE OR REPLACE FUNCTION HasSufficientBalance (
    p_AccountID IN NUMBER,
    p_Amount    IN NUMBER
) RETURN BOOLEAN IS
    v_Balance NUMBER;
BEGIN
    -- Fetch the balance of the designated account
SELECT Balance INTO v_Balance
FROM Accounts
WHERE AccountID = p_AccountID;

-- Return conditional boolean check
IF v_Balance >= p_Amount THEN
        RETURN TRUE;
ELSE
        RETURN FALSE;
END IF;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        -- Return false if the account doesn't exist
        RETURN FALSE;
END HasSufficientBalance;
/