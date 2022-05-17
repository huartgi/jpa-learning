package fr.huartgi.jpalearning;


import fr.huartgi.jpalearning.core.domain.Club;
import fr.huartgi.jpalearning.core.domain.Country;
import fr.huartgi.jpalearning.core.domain.Match;
import fr.huartgi.jpalearning.core.domain.Player;
import fr.huartgi.jpalearning.core.service.ClubService;
import fr.huartgi.jpalearning.core.service.CountryService;
import fr.huartgi.jpalearning.core.service.MatchService;
import fr.huartgi.jpalearning.core.service.PlayerService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

@SpringBootTest(classes = {JpaLearningBootApplication.class})
@ActiveProfiles(profiles = {"Test1","cache"})
@Slf4j
public class Test2 {

    @Autowired
    private ClubService clubService;
    @Autowired
    private MatchService matchService;
    @Autowired
    private PlayerService playerService;
    @Autowired
    private CountryService countryService;

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
    @Test
    public void testQueries() {

        // test cache
        log.debug("Retrieving France by code (FRA)");
        Country france = countryService.findByCode("FRA");
        log.debug("Retrieving France by id");
        countryService.findById(france.getId());
        log.debug("Retrieving France by code");
        countryService.findByCode("FRA");
        log.debug("Retrieving France by id");
        countryService.findById(france.getId());

        log.debug("\n\n\n");

        log.debug("1. Loading clubs");
        List<Club> clubs = clubService.findAll();
        log.debug(String.format("%d clubs found\n", clubs.size()));

        log.debug("\n\n\n");

        log.debug("2. Loading matchs");
        List<Match> matchs = matchService.findAll();
        log.debug(String.format("%d matchs found\n", matchs.size()));

        log.debug("\n\n\n");

        log.debug("3. Loading players");
        List<Player> players = playerService.findAll();
        log.debug(String.format("%d players found\n", players.size()));
    }

}
