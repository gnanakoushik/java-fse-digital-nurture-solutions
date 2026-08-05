package com.example.library;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        try (ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml")) {
            BookService service = (BookService) ctx.getBean("bookService");
            String title = service.getBookTitle(42);
            System.out.println("Fetched title: " + title);
        }
    }
}
