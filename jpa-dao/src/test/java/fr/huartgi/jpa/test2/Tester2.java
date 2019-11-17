package fr.huartgi.jpa.test2;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.huartgi.jpa.core.domain.club.Club;
import fr.huartgi.jpa.core.domain.club.Country;
import fr.huartgi.jpa.core.domain.club.Player;
import fr.huartgi.jpa.core.domain.league.Match;
import fr.huartgi.jpa.core.service.club.ClubService;
import fr.huartgi.jpa.core.service.club.CountryService;
import fr.huartgi.jpa.core.service.club.PlayerService;
import fr.huartgi.jpa.core.service.league.MatchService;

/**
 * Bringing 2nd level cache.

 *
 * @author Gildas
 *
 */
@Named
public class Tester2 {

	private static final Logger logger = LoggerFactory.getLogger(Tester2.class);
	
	@Inject
	private ClubService clubService;
	@Inject
	private MatchService matchService;
	@Inject
	private PlayerService playerService;
	@Inject
	private CountryService countryService;
	
	/**
	 * In the scenario :
	 * - the 2nd level cache of JPA is enabled for entities
	 * - the entity Country is tagged as cacheable
	 * - we get a country successively by code, id, code and id 
	 *  
	 * Then we replay the same queries that are played in Test 1.
	 * We can notice that every country read once is never read twice.
	 */
	public void testQueries() {
		
		// test cache
		logger.debug("Récupération pays FRA par code");
		Country france = countryService.findByCode("FRA");
		logger.debug("Récupération pays FRA par id");
		countryService.findById(france.getId());
		logger.debug("Récupération pays FRA par code");
		countryService.findByCode("FRA");
		logger.debug("Récupération pays FRA par id");
		countryService.findById(france.getId());
		
		logger.debug("Loading clubs");
		List<Club> clubs = clubService.findAll();
		logger.debug(String.format("%d clubs found\n", clubs.size()));
		//displayClubs(clubs);
		
		logger.debug("Loading matchs");
		List<Match> matchs = matchService.findAll();
		logger.debug(String.format("%d matchs found\n", matchs.size()));
		//displayMatchs(matchs);
		
		logger.debug("Loading players");
		List<Player> players = playerService.findAll();
		logger.debug(String.format("%d players found\n", players.size()));
	}
	
	@SuppressWarnings("unused")
	private void displayClubs(List<Club> clubs) {
		for (Club club : clubs) {
			System.out.printf("%-25s %-7s %-100s\n", club.getName(), club.getCountry().getCode(), club.getStadium().getName());
		}
	}
	
	@SuppressWarnings("unused")
	private void displayMatchs(List<Match> matchs) {
		for (Match match : matchs) {
			System.out.printf("%25s %-1d - %-1d %-25s\n", match.getClubHome().getName(), match.getGoalHome(), match.getGoalAway(), match.getClubAway().getName());
		}
	}
	

}
