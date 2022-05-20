package fr.huartgi.jpalearning;

import fr.huartgi.jpalearning.core.domain.Country;
import fr.huartgi.jpalearning.core.service.ClubService;
import fr.huartgi.jpalearning.core.service.CountryService;
import fr.huartgi.jpalearning.core.service.MatchService;
import fr.huartgi.jpalearning.core.service.PlayerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest(classes = {JpaLearningBootApplication.class})
@ActiveProfiles(profiles = {"dao1","cache"})
@RequiredArgsConstructor
@Slf4j
class TestCase2 {

    private final ClubService clubService;
    private final MatchService matchService;
    private final PlayerService playerService;
    private final CountryService countryService;

    /**
     * In this scenario :
     * - the 2nd level cache of JPA is enabled for entities
     * - the entity Country is tagged as @Cacheable
     * - we get a country successively by code, id, code and id.
     *
     * Then we execute the following queries :
     * - load all clubs
     * - load all matches
     * - load all players.
     *
     * We can notice that :
     * - every country is only read once (not twice).
     */
    @Test
    void testQueries() {

        // test cache
        log.debug("Retrieving France by code (FRA)");
        Country france = countryService.findByCode("FRA");
        log.debug("Retrieving France by id ({})", france.getId());
        countryService.findById(france.getId());
        log.debug("Retrieving France by code (FRA)");
        countryService.findByCode("FRA");
        log.debug("Retrieving France by id ({})", france.getId());
        countryService.findById(france.getId());

        log.debug("\n\n\n");

        clubService.findAll();
        matchService.findAll();
        playerService.findAll();

    }

}
