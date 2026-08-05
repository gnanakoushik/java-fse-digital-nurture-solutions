Week 6 - Spring Web Project (spring-learn)

This folder contains a Spring Boot web project implementing:
- Loading `SimpleDateFormat` from `date-format.xml` and parsing a sample date
- A small REST API to serve countries loaded from `country.xml`

Endpoints:
- GET /country -> returns the India country bean
- GET /countries -> returns all countries
- GET /countries/{code} -> returns country matching code (case-insensitive)

Build & Run:
```bash
mvn -q -DskipTests package
mvn spring-boot:run
```

Notes:
- `date-format.xml` and `country.xml` are in `src/main/resources`.
- The application runs on port `8083` (configured in `application.properties`).
