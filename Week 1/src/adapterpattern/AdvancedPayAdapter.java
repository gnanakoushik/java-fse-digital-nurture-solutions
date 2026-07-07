package adapterpattern;

public class AdvancedPayAdapter implements PaymentProcessor {
    private AdvancedPay advancedPayGateway;

    // Inject the third-party gateway dependency via constructor
    public AdvancedPayAdapter(AdvancedPay advancedPayGateway) {
        this.advancedPayGateway = advancedPayGateway;
    }

    @Override
    public void processPayment(double amount) {
        // The adapter translates our interface call to their specific call!
        advancedPayGateway.makePayment(amount);
    }
}