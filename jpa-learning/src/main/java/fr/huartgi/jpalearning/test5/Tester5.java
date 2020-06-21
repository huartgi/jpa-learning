package fr.huartgi.jpalearning.test5;

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
public class Tester5 {

	private static final Logger logger = LoggerFactory.getLogger(Tester5.class);
	
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
	 * We do the same queries as in the previous scenario, but replacing join fetch in queries by entity graphs.
	 * Not the same code, but the exact same result. 
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

		technicalDao.getEntityManager().find(Stadium.class, 1L);
	}

}
