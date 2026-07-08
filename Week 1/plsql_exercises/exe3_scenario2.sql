CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_Department IN VARCHAR2,
    p_BonusPercentage IN NUMBER
) IS
BEGIN
    -- Update salary by adding the designated bonus percentage
UPDATE Employees
SET Salary = Salary * (1 + (p_BonusPercentage / 100))
WHERE Department = p_Department;

COMMIT;
DBMS_OUTPUT.PUT_LINE('Successfully applied a ' || p_BonusPercentage || '% bonus to all employees in the ' || p_Department || ' department.');
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error updating employee bonuses: ' || SQLERRM);
END UpdateEmployeeBonus;
/