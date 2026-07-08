-- 1. PACKAGE SPECIFICATION
CREATE OR REPLACE PACKAGE CustomerManagement IS
    PROCEDURE AddNewCustomer(p_CustomerID NUMBER, p_Name VARCHAR2, p_DOB DATE, p_Balance NUMBER);
    PROCEDURE UpdateCustomerDetails(p_CustomerID NUMBER, p_NewName VARCHAR2, p_NewBalance NUMBER);
    FUNCTION GetCustomerBalance(p_CustomerID NUMBER) RETURN NUMBER;
END CustomerManagement;
/

-- 2. PACKAGE BODY
CREATE OR REPLACE PACKAGE BODY CustomerManagement IS

    PROCEDURE AddNewCustomer(p_CustomerID NUMBER, p_Name VARCHAR2, p_DOB DATE, p_Balance NUMBER) IS
BEGIN
INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (p_CustomerID, p_Name, p_DOB, p_Balance, SYSDATE);
COMMIT;
END AddNewCustomer;

    PROCEDURE UpdateCustomerDetails(p_CustomerID NUMBER, p_NewName VARCHAR2, p_NewBalance NUMBER) IS
BEGIN
UPDATE Customers
SET Name = p_NewName, Balance = p_NewBalance, LastModified = SYSDATE
WHERE CustomerID = p_CustomerID;
COMMIT;
END UpdateCustomerDetails;

    FUNCTION GetCustomerBalance(p_CustomerID NUMBER) RETURN NUMBER IS
        v_Balance NUMBER;
BEGIN
SELECT Balance INTO v_Balance FROM Customers WHERE CustomerID = p_CustomerID;
RETURN v_Balance;
EXCEPTION
        WHEN NO_DATA_FOUND THEN RETURN 0;
END GetCustomerBalance;

END CustomerManagement;
/