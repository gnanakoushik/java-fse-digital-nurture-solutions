package com.example.library;

public class BookService {
    private BookRepository bookRepository;

    // Setter injection used in XML configuration
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public String getBookTitle(int id) {
        return bookRepository.findBookTitleById(id);
    }
}
