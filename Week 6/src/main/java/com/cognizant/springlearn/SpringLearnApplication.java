package com.cognizant.springlearn;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        ApplicationContext ctx = SpringApplication.run(SpringLearnApplication.class, args);
        LOGGER.info("Spring application started");
        displayDate();
    }

    public static void displayDate() {
        try (ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("date-format.xml")) {
            SimpleDateFormat format = ctx.getBean("dateFormat", SimpleDateFormat.class);
            Date d = format.parse("31/12/2018");
            System.out.println("Parsed date: " + d);
        } catch (ParseException e) {
            LOGGER.error("Failed to parse date", e);
        }
    }
}
