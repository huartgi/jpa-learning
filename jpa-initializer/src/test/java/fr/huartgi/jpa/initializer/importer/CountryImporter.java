package fr.huartgi.jpa.initializer.importer;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ThreadLocalRandom;

import javax.inject.Inject;
import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.huartgi.jpa.core.domain.club.Country;
import fr.huartgi.jpa.core.service.club.CountryService;
import fr.huartgi.jpa.initializer.run.DatabaseInitializer;

@Named
public class CountryImporter {

	private static final Logger logger = LoggerFactory.getLogger(CountryImporter.class);
	
	// countries (key = code ISO 3)
	private Map<String, Country> countries = new HashMap<String, Country>(); 
	
	
	@Inject
	private CountryService countryService;
	
	/**
	 * Creates real countries from file
	 */
	public void importCountries() {
		
		InputStream is = DatabaseInitializer.class.getResourceAsStream("/data/countries.txt");
		BufferedReader br = new BufferedReader(new InputStreamReader(is));
        String line;
        try {
			while ((line = br.readLine()) != null) {
			    String code = line.substring(0, 3);
			    String name = line.substring(4);
			    Country country = new Country(code, name);
			    countryService.create(country);
			    countries.put(code, country);
			}
		} 
        catch (IOException err) {
			logger.error("Impossible to read file data/countries.txt", err);
		}
		
	}

	public Map<String, Country> getCountries() {
		return countries;
	}
	
	
	public Country getRandomCountry() {
		int min = 0;
		int max = countries.size();
		int index = ThreadLocalRandom.current().nextInt(min, max);
		return new ArrayList<Country>(countries.values()).get(index);
	}



}
