package fr.huartgi.jpalearning.test7;

import fr.huartgi.jpalearning.core.domain.*;
import fr.huartgi.jpalearning.core.service.*;
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
public class Tester7 {

	private static final Logger logger = LoggerFactory.getLogger(Tester7.class);
	
	@Autowired
	private ClubService clubService;
	@Autowired
	private MatchService matchService;
	@Autowired
	private PlayerService playerService;
	@Autowired
	private CountryService countryService;
	@Autowired
	private StadiumService stadiumService;
	
	/**
	 * No more "select n+1" problem. No more joins.
	 * Actually, nothing is loaded anymore, thanks to javax.persistence.fetchgraph hint and Hibernate 5.4.
	 * If we don't user these data, then no need to fetch them. We should fetch them only if we need them.
	 * 
	 */
	public void testQueries() {
		
		logger.debug("1. Loading countries");
		List<Country> countries = countryService.findAll();
		logger.debug(String.format("%d countries found\n", countries.size()));
		
		logger.debug("2. Loading stadiums");
		List<Stadium> stadiums = stadiumService.findAll();
		logger.debug(String.format("%d stadiums found\n", stadiums.size()));
		
		logger.debug("3. Loading clubs");
		List<Club> clubs = clubService.findAll();
		logger.debug(String.format("%d clubs found\n", clubs.size()));
		
		logger.debug("4. Loading matchs");
		List<Match> matchs = matchService.findAll();
		logger.debug(String.format("%d matchs found\n", matchs.size()));
		
		logger.debug("5. Loading players");
		List<Player> players = playerService.findAll();
		logger.debug(String.format("%d players found\n", players.size()));
	}

}
