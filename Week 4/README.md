Week 4 - Spring Exercises

Run instructions:

Build:
```bash
mvn -q -DskipTests package
```

Run the example (uses exec plugin):
```bash
mvn exec:java -Dexec.mainClass=com.example.library.MainApp
```

This project demonstrates:
- Basic Spring XML configuration and bean wiring
- Setter-based dependency injection for `BookService`
- A simple Aspect (`LoggingAspect`) that logs execution time of `BookService` methods
