-- 1. PACKAGE SPECIFICATION
CREATE OR REPLACE PACKAGE AccountOperations IS
    PROCEDURE OpenAccount(p_AccountID NUMBER, p_CustomerID NUMBER, p_AccountType VARCHAR2, p_InitialBalance NUMBER);
    PROCEDURE CloseAccount(p_AccountID NUMBER);
    FUNCTION GetTotalCustomerBalance(p_CustomerID NUMBER) RETURN NUMBER;
END AccountOperations;
/

-- 2. PACKAGE BODY
CREATE OR REPLACE PACKAGE BODY AccountOperations IS

    PROCEDURE OpenAccount(p_AccountID NUMBER, p_CustomerID NUMBER, p_AccountType VARCHAR2, p_InitialBalance NUMBER) IS
BEGIN
INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (p_AccountID, p_CustomerID, p_AccountType, p_InitialBalance, SYSDATE);
COMMIT;
END OpenAccount;

    PROCEDURE CloseAccount(p_AccountID NUMBER) IS
BEGIN
DELETE FROM Accounts WHERE AccountID = p_AccountID;
COMMIT;
END CloseAccount;

    FUNCTION GetTotalCustomerBalance(p_CustomerID NUMBER) RETURN NUMBER IS
        v_TotalBalance NUMBER;
BEGIN
        -- Add up balances across checking, savings, etc.
SELECT SUM(Balance) INTO v_TotalBalance FROM Accounts WHERE CustomerID = p_CustomerID;
RETURN NVL(v_TotalBalance, 0);
END GetTotalCustomerBalance;

END AccountOperations;
/
