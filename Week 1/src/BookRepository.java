import java.util.ArrayList;
import java.util.List;

public class BookRepository {
    private final List<Book> books = new ArrayList<>();

    public BookRepository() {
        // Pre-populating dummy data
        books.add(new Book(1, "Spring in Action", "Craig Walls"));
        books.add(new Book(2, "Effective Java", "Joshua Bloch"));
    }

    public List<Book> findAll() {
        return books;
    }
}