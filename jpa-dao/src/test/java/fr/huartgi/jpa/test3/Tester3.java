package fr.huartgi.jpa.test3;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.huartgi.jpa.core.domain.club.Club;
import fr.huartgi.jpa.core.domain.club.Player;
import fr.huartgi.jpa.core.domain.league.Match;
import fr.huartgi.jpa.core.service.club.ClubService;
import fr.huartgi.jpa.core.service.club.CountryService;
import fr.huartgi.jpa.core.service.club.PlayerService;
import fr.huartgi.jpa.core.service.club.StadiumService;
import fr.huartgi.jpa.core.service.league.MatchService;

/**
 * Preloading cache 
 * 
 * @author Gildas
 *
 */
@Named
public class Tester3 {

	private static final Logger logger = LoggerFactory.getLogger(Tester3.class);
	
	@Inject
	private ClubService clubService;
	@Inject
	private MatchService matchService;
	@Inject
	private PlayerService playerService;
	@Inject
	private CountryService countryService;
	@Inject
	private StadiumService stadiumService;
	
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
		
		logger.debug("1. Loading countries");
		countryService.findAll();
		
		logger.debug("2. Loading stadiums");
		stadiumService.findAll();
		
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
