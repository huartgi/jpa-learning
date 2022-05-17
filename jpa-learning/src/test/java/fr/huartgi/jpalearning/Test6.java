package fr.huartgi.jpalearning;


import fr.huartgi.jpalearning.core.domain.*;
import fr.huartgi.jpalearning.core.service.*;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

@SpringBootTest(classes = {JpaLearningBootApplication.class})
@ActiveProfiles(profiles = {"Test6","cache"})
@Slf4j
public class Test6 {

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
     * No more "select n+1" problem.
     * Everything is loaded by a single query, always using entity graphs.
     *
     */
    @Test
    public void testQueries() {

        log.debug("\n\n\n");

        log.debug("1. Loading countries");
        List<Country> countries = countryService.findAll();
        log.debug(String.format("%d countries found\n", countries.size()));

        log.debug("2. Loading stadiums");
        List<Stadium> stadiums = stadiumService.findAll();
        log.debug(String.format("%d stadiums found\n", stadiums.size()));

        log.debug("3. Loading clubs");
        List<Club> clubs = clubService.findAll();
        log.debug(String.format("%d clubs found\n", clubs.size()));

        log.debug("4. Loading matchs");
        List<Match> matchs = matchService.findAll();
        log.debug(String.format("%d matchs found\n", matchs.size()));

        log.debug("5. Loading players");
        List<Player> players = playerService.findAll();
        log.debug(String.format("%d players found\n", players.size()));
    }

}
