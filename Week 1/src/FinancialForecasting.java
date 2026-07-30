public class FinancialForecasting {

    // Recursive calculation for Future Value
    public static double calculateFutureValue(double presentValue, double growthRate, int periods) {
        if (periods == 0) {
            return presentValue;
        }
        return calculateFutureValue(presentValue * (1 + growthRate), growthRate, periods - 1);
    }

    public static void main(String[] args) {
        double initialInvestment = 1000.0;
        double annualGrowthRate = 0.05;
        int years = 5;

        double futureValue = calculateFutureValue(initialInvestment, annualGrowthRate, years);
        System.out.printf("Forecasted Future Value after %d years: $%.2f\n", years, futureValue);
    }
}