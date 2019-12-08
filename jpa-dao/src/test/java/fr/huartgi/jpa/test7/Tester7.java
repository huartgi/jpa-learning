package fr.huartgi.jpa.test7;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.hibernate.loader.MultipleBagFetchException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.huartgi.jpa.core.domain.club.Club;
import fr.huartgi.jpa.core.domain.club.Country;
import fr.huartgi.jpa.core.service.club.ClubService;
import fr.huartgi.jpa.core.service.club.CountryService;

/**
 * Test comment 
 * @author Gildas
 *
 */
@Named
public class Tester7 {

	private static final Logger logger = LoggerFactory.getLogger(Tester7.class);
	
	@Inject
	private ClubService clubService;
	@Inject
	private CountryService countryService;
	
	/**
	 * Loading the clubs and their sublists in one query will fail.
	 * 
	 */
	public void testQueries() {
		
		logger.debug("1. Loading countries - Filling cache");
		List<Country> countries = countryService.findAll();
		logger.debug(String.format("%d countries found\n", countries.size()));
		
		logger.debug("2. Loading clubs");
		try {
			List<Club> clubs = clubService.findAll();
			logger.debug(String.format("%d clubs found\n", clubs.size()));
		}
		catch (Exception e) {
			logger.error("Cannot loads multiple sublists for each club of the main list", e);
		}
	}

}
