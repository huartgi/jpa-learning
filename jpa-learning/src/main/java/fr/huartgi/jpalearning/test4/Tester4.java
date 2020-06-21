package fr.huartgi.jpalearning.test4;

import fr.huartgi.jpalearning.core.common.TechnicalDao;
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
public class Tester4 {

	private static final Logger logger = LoggerFactory.getLogger(Tester4.class);
	
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

	@Autowired
	private TechnicalDao technicalDao;
	
	/**
	 * 3. Loading clubs
	 * We load the clubs and join fetch the stadiums in the same query.
	 * --> 1 query only
	 *
	 * 4. Loading matches
	 * We load the matches and join fetch the clubs (home & away) in the same query.
	 * For each match, JPA will then retrieve : 
	 * - the season
	 * - the stadium of the clubs.
	 * 
	 * 5. Loadings players
	 * We load the players and join fetch the club and the stadium of the club.
	 * --> 1 query only
	 * 
	 *
	 * 
	 */
	public void testQueries() {

		technicalDao.triggerSchemaGeneration();

		logger.debug("\n\n\n");
		
		logger.debug("1. Loading countries");
		List<Country> countries = countryService.findAll();
		logger.debug(String.format("%d countries found\n", countries.size()));

		logger.debug("\n\n\n");
		
		logger.debug("2. Loading stadiums");
		List<Stadium> stadiums = stadiumService.findAll();
		logger.debug(String.format("%d stadiums found\n", stadiums.size()));

		logger.debug("\n\n\n");
		
		logger.debug("3. Loading clubs");
		List<Club> clubs = clubService.findAll();
		logger.debug(String.format("%d clubs found\n", clubs.size()));

		logger.debug("\n\n\n");
		
		logger.debug("4. Loading matchs");
		List<Match> matchs = matchService.findAll();
		logger.debug(String.format("%d matchs found\n", matchs.size()));

		logger.debug("\n\n\n");
		
		logger.debug("5. Loading players");
		List<Player> players = playerService.findAll();
		logger.debug(String.format("%d players found\n", players.size()));
	}

}
