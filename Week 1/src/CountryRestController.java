import java.util.HashMap;
import java.util.Map;

// Simulating a Spring Boot REST Controller endpoint
public class CountryRestController {

    private static final Map<String, String> countryDatabase = new HashMap<>();

    static {
        countryDatabase.put("US", "United States");
        countryDatabase.put("IN", "India");
        countryDatabase.put("UK", "United Kingdom");
        countryDatabase.put("JP", "Japan");
    }

    // Endpoint: GET /hello
    public String getHelloWorld() {
        return "Hello World RESTful Web Service";
    }

    // Endpoint: GET /country/{code}
    public String getCountryByCode(String code) {
        String country = countryDatabase.get(code.toUpperCase());
        if (country != null) {
            return "{\"code\": \"" + code + "\", \"countryName\": \"" + country + "\"}";
        }
        return "{\"error\": \"Country code not found\"}";
    }

    public static void main(String[] args) {
        CountryRestController controller = new CountryRestController();

        System.out.println("REST Response 1: " + controller.getHelloWorld());
        System.out.println("REST Response 2 (Search 'IN'): " + controller.getCountryByCode("IN"));
        System.out.println("REST Response 3 (Search 'FR'): " + controller.getCountryByCode("FR"));
    }
}