CREATE OR REPLACE TRIGGER UpdateCustomerLastModified
BEFORE UPDATE ON Customers
                  FOR EACH ROW
BEGIN
    -- Automatically set the column to the current system date/time
    :NEW.LastModified := SYSDATE;
END;
/