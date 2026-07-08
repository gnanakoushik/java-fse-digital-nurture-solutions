CREATE OR REPLACE FUNCTION CalculateAge (
    p_DOB IN DATE
) RETURN NUMBER IS
    v_Age NUMBER;
BEGIN
    -- Calculate age based on total months difference from today
    v_Age := FLOOR(MONTHS_BETWEEN(SYSDATE, p_DOB) / 12);
RETURN v_Age;
END CalculateAge;
/