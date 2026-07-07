public class SingletonTest {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();
        logger1.log("Transaction processed successfully.");
        logger2.log("Database connection established.");
    }
}