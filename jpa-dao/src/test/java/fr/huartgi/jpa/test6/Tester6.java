package fr.huartgi.jpa.test6;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.huartgi.jpa.core.domain.Club;
import fr.huartgi.jpa.core.domain.Country;
import fr.huartgi.jpa.core.domain.Player;
import fr.huartgi.jpa.core.domain.Stadium;
import fr.huartgi.jpa.core.domain.Match;
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
public class Tester6 {

	private static final Logger logger = LoggerFactory.getLogger(Tester6.class);
	
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
	 * No more "select n+1" problem.
	 * Everything is loading by a single query, always using entity graphs.
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
