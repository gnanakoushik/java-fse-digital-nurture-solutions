import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

// Ensure the class is public!
public class CalculatorTest {

    // Internal dummy class defined cleanly here
    public static class Calculator {
        public int add(int a, int b) { return a + b; }
        public int divide(int a, int b) {
            if (b == 0) throw new ArithmeticException("Cannot divide by zero");
            return a / b;
        }
    }

    private Calculator calculator;

    @BeforeEach
    public void setUp() {
        calculator = new Calculator();
    }

    @AfterEach
    public void tearDown() {
        calculator = null;
    }

    @Test
    @DisplayName("Exercise 4: AAA Pattern - Add Method Verification")
    public void testAddSuccess() {
        // Arrange
        int num1 = 10;
        int num2 = 5;

        // Act
        int result = calculator.add(num1, num2);

        // Assert
        assertEquals(15, result, "10 + 5 should equal 15");
    }

    @Test
    @DisplayName("Exercise 3: Custom State Assertions")
    public void testStateAssertions() {
        assertTrue(calculator.add(5, 5) > 0);
        assertFalse(calculator.add(-5, -5) > 0);
        assertNotNull(calculator);
    }

    @Test
    @DisplayName("Exercise 3: Exception Assertion Verification")
    public void testDivideByZeroThrowsException() {
        assertThrows(ArithmeticException.class, () -> {
            calculator.divide(10, 0);
        });
    }
}