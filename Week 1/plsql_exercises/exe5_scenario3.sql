CREATE OR REPLACE TRIGGER CheckTransactionRules
BEFORE INSERT ON Transactions
FOR EACH ROW
DECLARE
v_CurrentBalance NUMBER;
BEGIN
    -- 1. Ensure deposits are positive amounts
    IF :NEW.TransactionType = 'Deposit' AND :NEW.Amount <= 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Transaction Rejected: Deposit amounts must be greater than zero.');
END IF;

    -- 2. Validate sufficient funds for withdrawals
    IF :NEW.TransactionType = 'Withdrawal' THEN
SELECT Balance INTO v_CurrentBalance
FROM Accounts
WHERE AccountID = :NEW.AccountID;

IF :NEW.Amount > v_CurrentBalance THEN
            RAISE_APPLICATION_ERROR(-20002, 'Transaction Rejected: Insufficient account balance for this withdrawal.');
END IF;
END IF;
END;
/