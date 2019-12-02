package fr.huartgi.jpa.test4;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.huartgi.jpa.core.domain.club.Club;
import fr.huartgi.jpa.core.domain.club.Country;
import fr.huartgi.jpa.core.domain.club.Player;
import fr.huartgi.jpa.core.domain.club.Stadium;
import fr.huartgi.jpa.core.domain.league.Match;
import fr.huartgi.jpa.core.service.club.ClubService;
import fr.huartgi.jpa.core.service.club.CountryService;
import fr.huartgi.jpa.core.service.club.PlayerService;
import fr.huartgi.jpa.core.service.club.StadiumService;
import fr.huartgi.jpa.core.service.league.MatchService;

/**
 * Test comment 
 * @author Gildas
 *
 */
@Named
public class Tester4 {

	private static final Logger logger = LoggerFactory.getLogger(Tester4.class);
	
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
