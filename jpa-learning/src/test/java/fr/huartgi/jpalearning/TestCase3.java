package fr.huartgi.jpalearning;

import fr.huartgi.jpalearning.core.service.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest(classes = {JpaLearningBootApplication.class})
@ActiveProfiles(profiles = {"dao1", "cache"})
@RequiredArgsConstructor
@Slf4j
class TestCase3 {

    private final CountryService countryService;
    private final StadiumService stadiumService;
    private final ClubService clubService;
    private final MatchService matchService;
    private final PlayerService playerService;

    /**
     * In this scenario :
     * - the 2nd level cache of JPA is enabled
     * - the entity Country is tagged as cacheable..
     *
     * Then we execute the following queries :
     * - load all countries --> fills the cache
     * - load all stadiums
     * - load all clubs
     * - load all matches
     * - load all players.
     *
     * We can notice that :
     * - no country is read apart from the loading cache query (1 single query to load them all).
     */
    @Test
    void testQueries() {

        countryService.findAll();
        stadiumService.findAll();
        clubService.findAll();
        matchService.findAll();
        playerService.findAll();
    }

}
