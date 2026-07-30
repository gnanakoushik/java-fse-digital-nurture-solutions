import java.util.logging.Logger;
import java.util.logging.Level;

public class LoggingExercise {
    private static final Logger logger = Logger.getLogger(LoggingExercise.class.getName());

    public static void processTransaction(double amount) {
        logger.info("Processing transaction of amount: $" + amount);

        if (amount < 0) {
            logger.warning("Transaction amount is negative! Flagging potential anomaly.");
        }

        try {
            if (amount == 0) {
                throw new IllegalArgumentException("Transaction amount cannot be zero.");
            }
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Error encountered while processing transaction: " + e.getMessage(), e);
        }
    }

    public static void main(String[] args) {
        processTransaction(150.00);
        processTransaction(-20.00);
        processTransaction(0.00);
    }
}