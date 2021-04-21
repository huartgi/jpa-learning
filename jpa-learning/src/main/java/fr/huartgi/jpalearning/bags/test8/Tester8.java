package fr.huartgi.jpalearning.bags.test8;

import fr.huartgi.jpalearning.core.domain.Club;
import fr.huartgi.jpalearning.core.domain.Country;
import fr.huartgi.jpalearning.core.service.ClubService;
import fr.huartgi.jpalearning.core.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Test comment 
 * @author Gildas
 *
 */
@Component
public class Tester8 {

	private static final Logger logger = LoggerFactory.getLogger(Tester8.class);
	
	@Autowired
	private ClubService clubService;
	@Autowired
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
