package fr.huartgi.jpalearning.selectnplus1.test2;

import fr.huartgi.jpalearning.core.common.TechnicalDao;
import fr.huartgi.jpalearning.core.domain.Club;
import fr.huartgi.jpalearning.core.domain.Country;
import fr.huartgi.jpalearning.core.domain.Match;
import fr.huartgi.jpalearning.core.domain.Player;
import fr.huartgi.jpalearning.core.service.ClubService;
import fr.huartgi.jpalearning.core.service.CountryService;
import fr.huartgi.jpalearning.core.service.MatchService;
import fr.huartgi.jpalearning.core.service.PlayerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Bringing 2nd level cache.

 *
 * @author Gildas
 *
 */
@Component
public class Tester2 {

	private static final Logger logger = LoggerFactory.getLogger(Tester2.class);
	
	@Autowired
	private ClubService clubService;
	@Autowired
	private MatchService matchService;
	@Autowired
	private PlayerService playerService;
	@Autowired
	private CountryService countryService;

	@Autowired
	private TechnicalDao technicalDao;
	
	/**
	 * In this scenario :
	 * - the 2nd level cache of JPA is enabled for entities
	 * - the entity Country is tagged as cacheable
	 * - we get a country successively by code, id, code and id.
	 *  
	 * Then we play the following queries :
	 * - load all clubs
	 * - load all matches
	 * - load all players.
	 * 
	 * We can notice that :
	 * - every country read once is never read twice.
	 */
	public void testQueries() {

		technicalDao.triggerSchemaGeneration();

		logger.debug("\n\n\n");
		
		// test cache
		logger.debug("Retrieving France by code (FRA)");
		Country france = countryService.findByCode("FRA");
		logger.debug("Retrieving France by id");
		countryService.findById(france.getId());
		logger.debug("Retrieving France by code");
		countryService.findByCode("FRA");
		logger.debug("Retrieving France by id");
		countryService.findById(france.getId());

		logger.debug("\n\n\n");
		
		logger.debug("1. Loading clubs");
		List<Club> clubs = clubService.findAll();
		logger.debug(String.format("%d clubs found\n", clubs.size()));

		logger.debug("\n\n\n");
		
		logger.debug("2. Loading matchs");
		List<Match> matchs = matchService.findAll();
		logger.debug(String.format("%d matchs found\n", matchs.size()));

		logger.debug("\n\n\n");
		
		logger.debug("3. Loading players");
		List<Player> players = playerService.findAll();
		logger.debug(String.format("%d players found\n", players.size()));
	}

}
