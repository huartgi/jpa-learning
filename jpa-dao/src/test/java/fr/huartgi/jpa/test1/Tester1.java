package fr.huartgi.jpa.test1;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.huartgi.jpa.core.domain.club.Club;
import fr.huartgi.jpa.core.domain.club.Player;
import fr.huartgi.jpa.core.domain.league.Match;
import fr.huartgi.jpa.core.service.club.ClubService;
import fr.huartgi.jpa.core.service.club.PlayerService;
import fr.huartgi.jpa.core.service.league.MatchService;

/**
 * Test comment 
 * @author Gildas
 *
 */
@Named
public class Tester1 {

	private static final Logger logger = LoggerFactory.getLogger(Tester1.class);
	
	@Inject
	private ClubService clubService;
	@Inject
	private MatchService matchService;
	@Inject
	private PlayerService playerService;
	
	
	/**
	 * In this scenario, we query the database without any optimization to :
	 * - load all clubs
	 * - load all matches
	 * - load all players.
	 * 
	 * 1. Loading clubs
	 * - for each club, JPA retrieves : 
	 * --> its country
	 * --> its stadium
	 * - a country read once is not read twice for another club (because same transaction / persistence context)
	 * 
	 * Notice that : 
	 * - a country read once is not read twice for another club (because same transaction / persistence context)
	 * 
	 * 
	 * 2. Loading matches
	 * - for each match (select N+1 problem), JPA retrieves : 
	 * --> the home club... and for that club, retrieves 
	 * ----> the country of the home club
	 * ----> the stadium of the home club.
	 * --> same for the away club (even if the country is the same as the home club's). 
	 * ----> the country of the away club
	 * ----> the stadium of the away club.
	 * --> the season of the match
	 * ----> the competition related to this season
	 * ----> the club winner 
	 * ------> the country of the club winner
	 * ------> the stadium of the club winner
	 * 
	 */
	public void testQueries() {
		
		logger.debug("1. Loading clubs");
		List<Club> clubs = clubService.findAll();
		logger.debug(String.format("%d clubs found\n", clubs.size()));
		
		logger.debug("2. Loading matches");
		List<Match> matchs = matchService.findAll();
		logger.debug(String.format("%d matchs found\n", matchs.size()));
		
		logger.debug("3. Loading players");
		List<Player> players = playerService.findAll();
		logger.debug(String.format("%d players found\n", players.size()));
	}

}
