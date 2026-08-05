package com.cognizant.springlearn.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cognizant.springlearn.model.Country;

@Service
public class CountryService {

    @SuppressWarnings("unchecked")
    public List<Country> getAllCountries() {
        try (ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("country.xml")) {
            Object bean = ctx.getBean("countryList");
            if (bean instanceof List) {
                return (List<Country>) bean;
            }
            return new ArrayList<>();
        }
    }

    public Country getCountry(String code) {
        List<Country> countries = getAllCountries();
        for (Country c : countries) {
            if (c.getCode() != null && c.getCode().equalsIgnoreCase(code)) {
                return c;
            }
        }
        return null;
    }
}
