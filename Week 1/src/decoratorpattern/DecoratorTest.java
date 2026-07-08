package decoratorpattern;

public class DecoratorTest {
    public static void main(String[] args) {
        System.out.println("--- Testing Decorator Pattern ---");

        // 1. Basic Email Notifier
        Notifier basicEmail = new EmailNotifier();

        // 2. Wrap Email with SMS capability
        Notifier emailAndSMS = new SMSNotifierDecorator(basicEmail);

        // 3. Wrap Email + SMS with Slack capability too!
        Notifier fullyDecorated = new SlackNotifierDecorator(emailAndSMS);

        System.out.println("Executing fully stacked notifications:");
        fullyDecorated.send("System Alert: Server downtime detected!");
    }
}