Week 5 - Spring Data JPA Quick Example

This folder contains a simple Spring Boot project demonstrating:
- Spring Boot application structure
- Spring Data JPA with `Country` entity and repository
- Simple `CountryService` and a main method that fetches all countries
- Employee/Department entities and repositories for the Employee Management exercises

Run instructions:

1. Configure database in `src/main/resources/application.properties`.
   - For MySQL, uncomment and update the MySQL settings and create schema `ormlearn`:

     create schema ormlearn;

     create table country(co_code varchar(2) primary key, co_name varchar(50));
     insert into country values ('IN','India');
     insert into country values ('US','United States of America');

2. Build:
```bash
mvn -q -DskipTests package
```

3. Run:
```bash
mvn spring-boot:run
```

Or run the main class `com.cognizant.ormlearn.OrmLearnApplication` from your IDE.

Notes:
- The `application.properties` contains an H2 example configuration useful for Employee exercises.
- The `Country` entity maps to `country(co_code, co_name)` to match the SQL sample from the exercise.
