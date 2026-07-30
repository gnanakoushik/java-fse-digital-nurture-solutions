import java.util.List;

public class BookService {
    private final BookRepository bookRepository;

    // Constructor Dependency Injection
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayBooks() {
        System.out.println("--- Fetching Books via Spring Inversion of Control Container ---");
        List<Book> books = bookRepository.findAll();
        for (Book b : books) {
            System.out.println(b);
        }
    }

    public static void main(String[] args) {
        // Simulating Spring IoC Container Initialization & Dependency Injection
        BookRepository repository = new BookRepository();
        BookService service = new BookService(repository);

        service.displayBooks();
    }
}