import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

// --- THE INTERFACE TO BE MOCKED ---
interface AccountRepository {
    double getBalance(int accountId);
    void updateBalance(int accountId, double amount);
}

// --- THE PRODUCTION BUSINESS LOGIC SERVICE ---
class AccountService {
    private final AccountRepository repository;

    public AccountService(AccountRepository repository) {
        this.repository = repository;
    }

    public boolean transferFunds(int fromId, int toId, double amount) {
        double sourceBalance = repository.getBalance(fromId);
        if (sourceBalance < amount) {
            return false; // Insufficient funds
        }
        repository.updateBalance(fromId, sourceBalance - amount);
        repository.updateBalance(toId, repository.getBalance(toId) + amount);
        return true;
    }
}

// --- MANDATORY TEST SUITE WITH CUSTOM MANUAL MOCKS ---
public class AccountServiceTest {

    private AccountService accountService;
    private MockAccountRepository mockRepository;

    @BeforeEach
    public void setUp() {
        // Arrange: Create a clean manual mock instance before every test execution
        mockRepository = new MockAccountRepository();
        accountService = new AccountService(mockRepository);
    }

    @Test
    @DisplayName("Exercise 1: Mocking & Stubbing - Successful Transfer Verification")
    public void testTransferFundsSuccess() {
        // 1. Stubbing: Define the data values our fake repository should return
        mockRepository.stubBalance(101, 1000.00); // Sender balance
        mockRepository.stubBalance(102, 200.00);  // Receiver balance

        // 2. Act: Execute the transfer
        boolean success = accountService.transferFunds(101, 102, 300.00);

        // 3. Assert: Validate return codes and mathematical behavior
        assertTrue(success, "Transfer should return true when funds are sufficient.");
        assertEquals(700.00, mockRepository.getBalance(101), "Sender balance should decrease by 300.");
        assertEquals(500.00, mockRepository.getBalance(102), "Receiver balance should increase by 300.");
    }

    @Test
    @DisplayName("Exercise 2: Verifying Behavioral Interactions and Invocations")
    public void testTransferFundsInteractionVerification() {
        // Stubbing setup
        mockRepository.stubBalance(501, 50.00); // Low balance
        mockRepository.stubBalance(502, 200.00);

        // Act: Attempt to transfer an amount larger than available balance
        boolean result = accountService.transferFunds(501, 502, 100.00);

        // Assert rules
        assertFalse(result, "Transfer must fail if sender has insufficient funds.");

        // Behavioral Verification
        assertEquals(1, mockRepository.getCallCount("getBalance"), "getBalance should be verified as executed.");
        assertEquals(0, mockRepository.getCallCount("updateBalance"), "updateBalance should never be invoked upon failure.");
    }

    // --- MANUAL SIMULATED MOCK ENGINE FOR CONTEXT TESTING ---
    private static class MockAccountRepository implements AccountRepository {
        private final Map<Integer, Double> balances = new HashMap<>();
        private final Map<String, Integer> invocationCounters = new HashMap<>();

        public void stubBalance(int id, double balance) {
            balances.put(id, balance);
        }

        public int getCallCount(String methodName) {
            return invocationCounters.getOrDefault(methodName, 0);
        }

        @Override
        public double getBalance(int accountId) {
            invocationCounters.put("getBalance", getCallCount("getBalance") + 1);
            return balances.getOrDefault(accountId, 0.0);
        }

        @Override
        public void updateBalance(int accountId, double amount) {
            invocationCounters.put("updateBalance", getCallCount("updateBalance") + 1);
            balances.put(accountId, amount);
        }
    }
}