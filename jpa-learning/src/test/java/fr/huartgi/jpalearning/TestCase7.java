package fr.huartgi.jpalearning;

import fr.huartgi.jpalearning.core.service.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest(classes = {JpaLearningBootApplication.class})
@ActiveProfiles(profiles = {"dao7","cache"})
@RequiredArgsConstructor
@Slf4j
class TestCase7 {

    private final ClubService clubService;
    private final MatchService matchService;
    private final PlayerService playerService;
    private final CountryService countryService;
    private final StadiumService stadiumService;

    /**
     * No more "select n+1" problem. No more joins.
     * Actually, nothing is loaded anymore, thanks to javax.persistence.fetchgraph hint and Hibernate starting from 5.4.11.
     * If we don't use these data, then no need to fetch them. We should fetch them only if we plan to use them.
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
