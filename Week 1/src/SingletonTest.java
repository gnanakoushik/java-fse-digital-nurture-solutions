public class SingletonTest {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("Transaction processed successfully.");
        logger2.log("Database connection established.");

        if (logger1 == logger2) {
            System.out.println("SUCCESS: Both variables reference the identical Logger instance.");
        } else {
            System.out.println("FAILURE: Multiple instances of the Logger exist!");
        }
    }
}