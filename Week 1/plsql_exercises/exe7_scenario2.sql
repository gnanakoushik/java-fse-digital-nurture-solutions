-- 1. PACKAGE SPECIFICATION
CREATE OR REPLACE PACKAGE EmployeeManagement IS
    PROCEDURE HireEmployee(p_EmployeeID NUMBER, p_Name VARCHAR2, p_Position VARCHAR2, p_Salary NUMBER, p_Department VARCHAR2);
    PROCEDURE UpdateEmployeeDetails(p_EmployeeID NUMBER, p_NewPosition VARCHAR2, p_NewSalary NUMBER);
    FUNCTION CalculateAnnualSalary(p_EmployeeID NUMBER) RETURN NUMBER;
END EmployeeManagement;
/

-- 2. PACKAGE BODY
CREATE OR REPLACE PACKAGE BODY EmployeeManagement IS

    PROCEDURE HireEmployee(p_EmployeeID NUMBER, p_Name VARCHAR2, p_Position VARCHAR2, p_Salary NUMBER, p_Department VARCHAR2) IS
BEGIN
INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (p_EmployeeID, p_Name, p_Position, p_Salary, p_Department, SYSDATE);
COMMIT;
END HireEmployee;

    PROCEDURE UpdateEmployeeDetails(p_EmployeeID NUMBER, p_NewPosition VARCHAR2, p_NewSalary NUMBER) IS
BEGIN
UPDATE Employees
SET Position = p_NewPosition, Salary = p_NewSalary
WHERE EmployeeID = p_EmployeeID;
COMMIT;
END UpdateEmployeeDetails;

    FUNCTION CalculateAnnualSalary(p_EmployeeID NUMBER) RETURN NUMBER IS
        v_MonthlySalary NUMBER;
BEGIN
SELECT Salary INTO v_MonthlySalary FROM Employees WHERE EmployeeID = p_EmployeeID;
RETURN v_MonthlySalary * 12;
EXCEPTION
        WHEN NO_DATA_FOUND THEN RETURN 0;
END CalculateAnnualSalary;

END EmployeeManagement;
/