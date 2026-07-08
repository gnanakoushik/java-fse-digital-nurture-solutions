DECLARE
-- Cursor to capture customers with loans maturing within 30 days
CURSOR c_due_loans IS
SELECT c.Name, l.LoanID, l.EndDate
FROM Loans l
         JOIN Customers c ON l.CustomerID = c.CustomerID
WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    DBMS_OUTPUT.PUT_LINE('--- LOAN EXPIRATION REMINDERS ---');
FOR r_reminder IN c_due_loans LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || r_reminder.Name || ', your loan (ID: ' || r_reminder.LoanID || ') is due on ' || TO_CHAR(r_reminder.EndDate, 'YYYY-MM-DD') || '. Please arrange payment.');
END LOOP;
END;
/