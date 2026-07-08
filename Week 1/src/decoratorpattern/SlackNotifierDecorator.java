package decoratorpattern;

public class SlackNotifierDecorator extends NotifierDecorator {
    public SlackNotifierDecorator(Notifier notifier) {
        super(notifier);
    }

    @Override
    public void send(String message) {
        super.send(message); // Sends previous notifications
        sendSlack(message);  // Adds Slack capability
    }

    private void sendSlack(String message) {
        System.out.println("Sending Slack Message: " + message);
    }
}