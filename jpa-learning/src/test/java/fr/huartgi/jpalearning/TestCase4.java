package fr.huartgi.jpalearning;

import fr.huartgi.jpalearning.core.service.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest(classes = {JpaLearningBootApplication.class})
@ActiveProfiles(profiles = {"dao4","cache"})
@RequiredArgsConstructor
@Slf4j
class TestCase4 {

    private final ClubService clubService;
    private final MatchService matchService;
    private final PlayerService playerService;
    private final CountryService countryService;
    private final StadiumService stadiumService;

    /**
     * > Loading clubs
     * We load the clubs and join fetch the stadiums in the same query.
     * --> 1 query only
     *
     * > Loading matches
     * We load the matches and join fetch the clubs (home & away) in the same query.
     * For each match, JPA will then retrieve the stadium of the clubs through select 1+N.
     *
     * > Loadings players
     * We load the players and join fetch the club and the stadium of the club.
     * --> 1 query only
     *
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
