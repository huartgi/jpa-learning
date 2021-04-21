package fr.huartgi.jpalearning.selectnplus1.test3;

import fr.huartgi.jpalearning.core.common.TechnicalDao;
import fr.huartgi.jpalearning.core.domain.*;
import fr.huartgi.jpalearning.core.service.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Preloading cache 
 * 
 * @author Gildas
 *
 */
@Component
public class Tester3 {

	private static final Logger logger = LoggerFactory.getLogger(Tester3.class);
	
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
	 * In this scenario :
	 * - the 2nd level cache of JPA is enabled
	 * - the entity Country is tagged as cacheable..
	 * 
	 * Then we play the following queries :
	 * - load all countries --> fills the cache
	 * - load all stadiums
	 * - load all clubs
	 * - load all matches
	 * - load all players.
	 * 
	 * We can notice that :
	 * - no country is read apart from the loading cache query (1 query).
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
