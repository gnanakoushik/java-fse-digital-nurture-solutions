package adapterpattern;

public class AdapterTest {
    public static void main(String[] args) {
        // 1. Instantiate the incompatible third-party gateway service
        AdvancedPay thirdPartyGateway = new AdvancedPay();

        // 2. Wrap it inside our polymorphic Adapter
        PaymentProcessor paymentProcessor = new AdvancedPayAdapter(thirdPartyGateway);

        // 3. The client application executes standard methods seamlessly!
        System.out.println("--- Testing Adapter Design Pattern ---");
        paymentProcessor.processPayment(450.50);
    }
}