-- Create the supporting AuditLog table first
CREATE TABLE AuditLog (
                          LogID NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                          TransactionID NUMBER,
                          AccountID NUMBER,
                          Amount NUMBER,
                          TransactionType VARCHAR2(10),
                          LogDate DATE
);
/

CREATE OR REPLACE TRIGGER LogTransaction
AFTER INSERT ON Transactions
FOR EACH ROW
BEGIN
    -- Record a duplicate tracker row into our audit table
INSERT INTO AuditLog (TransactionID, AccountID, Amount, TransactionType, LogDate)
VALUES (:NEW.TransactionID, :NEW.AccountID, :NEW.Amount, :NEW.TransactionType, SYSDATE);
END;
/