import java.util.*;

// 1. Entity Definition (JPA / Hibernate Model)
class Customer {
    private Long id;
    private String name;
    private String email;

    public Customer(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public String getEmail() { return email; }

    public void setName(String name) { this.name = name; }
    public void setEmail(String email) { this.email = email; }

    @Override
    public String toString() {
        return "Customer{id=" + id + ", name='" + name + "', email='" + email + "'}";
    }
}

// 2. Spring Data JPA Repository Simulation
interface CustomerRepository {
    Customer save(Customer customer);
    Optional<Customer> findById(Long id);
    List<Customer> findAll();
    void deleteById(Long id);
}

// 3. Simulated Repository Implementation
class CustomerRepositoryImpl implements CustomerRepository {
    private final Map<Long, Customer> database = new HashMap<>();

    @Override
    public Customer save(Customer customer) {
        database.put(customer.getId(), customer);
        return customer;
    }

    @Override
    public Optional<Customer> findById(Long id) {
        return Optional.ofNullable(database.get(id));
    }

    @Override
    public List<Customer> findAll() {
        return new ArrayList<>(database.values());
    }

    @Override
    public void deleteById(Long id) {
        database.remove(id);
    }
}

// 4. Main Executable Demonstration Class
public class CustomerRepositoryTest {

    public static void main(String[] args) {
        CustomerRepository repository = new CustomerRepositoryImpl();

        System.out.println("=== Spring Data JPA Hands-On Exercise ===");

        // CREATE / SAVE
        Customer c1 = new Customer(1L, "John Doe", "john@example.com");
        Customer c2 = new Customer(2L, "Jane Smith", "jane@example.com");
        repository.save(c1);
        repository.save(c2);
        System.out.println("Saved Customers to JPA Repository.");

        // READ / FIND ALL
        System.out.println("\nAll Customers in Repository:");
        repository.findAll().forEach(System.out::println);

        // READ / FIND BY ID
        System.out.println("\nSearching for Customer with ID 1:");
        repository.findById(1L).ifPresent(c -> System.out.println("Found: " + c));

        // DELETE
        repository.deleteById(1L);
        System.out.println("\nDeleted Customer ID 1. Remaining count: " + repository.findAll().size());
    }
}