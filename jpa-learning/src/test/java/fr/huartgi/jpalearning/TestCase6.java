package fr.huartgi.jpalearning;

import fr.huartgi.jpalearning.core.service.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest(classes = {JpaLearningBootApplication.class})
@ActiveProfiles(profiles = {"dao6","cache"})
@RequiredArgsConstructor
@Slf4j
class TestCase6 {

    private final ClubService clubService;
    private final MatchService matchService;
    private final PlayerService playerService;
    private final CountryService countryService;
    private final StadiumService stadiumService;

    /**
     * No more "select n+1" problem.
     * Everything is loaded by a single query, always using entity graphs.
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
