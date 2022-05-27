package fr.huartgi.jpalearning;

import fr.huartgi.jpalearning.core.service.ClubService;
import fr.huartgi.jpalearning.core.service.MatchService;
import fr.huartgi.jpalearning.core.service.PlayerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest(classes = {JpaLearningBootApplication.class})
@ActiveProfiles("dao1")
@RequiredArgsConstructor
@Slf4j
class TestCase1 {

    private final ClubService clubService;
    private final MatchService matchService;
    private final PlayerService playerService;

    /**
     * Project context : bad JPA mapping with every relationships marked as EAGER !
     *
     * In this scenario : we execute the following queries :
     * - load all clubs
     * - load all matches
     * - load all players.
     *
     */
    @Test
    void testQueries() {

        clubService.findAll();
        matchService.findAll();
        playerService.findAll();
    }
}