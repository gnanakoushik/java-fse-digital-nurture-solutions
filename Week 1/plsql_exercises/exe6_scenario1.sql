DECLARE
-- Explicit cursor to capture transaction statements for the current month
CURSOR c_monthly_statements IS
SELECT c.Name, t.AccountID, t.TransactionID, t.Amount, t.TransactionType, t.TransactionDate
FROM Transactions t
         JOIN Accounts a ON t.AccountID = a.AccountID
         JOIN Customers c ON a.CustomerID = c.CustomerID
WHERE EXTRACT(MONTH FROM t.TransactionDate) = EXTRACT(MONTH FROM SYSDATE)
  AND EXTRACT(YEAR FROM t.TransactionDate) = EXTRACT(YEAR FROM SYSDATE);

r_stmt c_monthly_statements%ROWTYPE;
BEGIN
    DBMS_OUTPUT.PUT_LINE('=== GENERATING MONTHLY TRANSACTION STATEMENTS ===');

OPEN c_monthly_statements;
LOOP
FETCH c_monthly_statements INTO r_stmt;
        EXIT WHEN c_monthly_statements%NOTFOUND;

        DBMS_OUTPUT.PUT_LINE('Customer: ' || r_stmt.Name ||
                             ' | Account: ' || r_stmt.AccountID ||
                             ' | TXID: ' || r_stmt.TransactionID ||
                             ' | Type: ' || r_stmt.TransactionType ||
                             ' | Amount: $' || r_stmt.Amount ||
                             ' | Date: ' || TO_CHAR(r_stmt.TransactionDate, 'YYYY-MM-DD'));
END LOOP;
CLOSE c_monthly_statements;
END;
/