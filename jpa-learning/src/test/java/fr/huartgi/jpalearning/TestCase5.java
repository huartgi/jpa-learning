package fr.huartgi.jpalearning;

import fr.huartgi.jpalearning.core.service.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest(classes = {JpaLearningBootApplication.class})
@ActiveProfiles(profiles = {"dao5","cache"})
@RequiredArgsConstructor
@Slf4j
class TestCase5 {

    private final ClubService clubService;
    private final MatchService matchService;
    private final PlayerService playerService;
    private final CountryService countryService;
    private final StadiumService stadiumService;

    /**
     * We do the same queries as in the previous scenario, but replacing join fetch in queries by entity graphs.
     * Not the same code, but the exact same result. 
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
