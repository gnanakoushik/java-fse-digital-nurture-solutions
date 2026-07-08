package decoratorpattern;

public class SMSNotifierDecorator extends NotifierDecorator {
    public SMSNotifierDecorator(Notifier notifier) {
        super(notifier);
    }

    @Override
    public void send(String message) {
        super.send(message); // Sends the email first
        sendSMS(message);    // Then adds SMS capability
    }

    private void sendSMS(String message) {
        System.out.println("Sending SMS Notification: " + message);
    }
}