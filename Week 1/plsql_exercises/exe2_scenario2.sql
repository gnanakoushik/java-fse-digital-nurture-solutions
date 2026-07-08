CREATE OR REPLACE PROCEDURE UpdateSalary (
    p_EmployeeID IN NUMBER,
    p_Percentage IN NUMBER
) IS
    v_CheckID NUMBER;
BEGIN
    -- Force a NO_DATA_FOUND exception if the employee id doesn't exist
SELECT EmployeeID INTO v_CheckID
FROM Employees
WHERE EmployeeID = p_EmployeeID;

-- Update the salary by the percentage given
UPDATE Employees
SET Salary = Salary * (1 + (p_Percentage / 100))
WHERE EmployeeID = p_EmployeeID;

COMMIT;
DBMS_OUTPUT.PUT_LINE('Successfully updated salary for Employee ID: ' || p_EmployeeID);

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Error: Employee ID ' || p_EmployeeID || ' does not exist in the database.');
WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('An unexpected error occurred during salary update: ' || SQLERRM);
END UpdateSalary;
/