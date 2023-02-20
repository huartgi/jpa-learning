package fr.huartgi.jpalearning.basic;

import fr.huartgi.jpalearning.JpaLearningBootApplication;
import fr.huartgi.jpalearning.core.service.ClubService;
import fr.huartgi.jpalearning.core.service.CountryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest(classes = {JpaLearningBootApplication.class})
@ActiveProfiles(profiles = {"dao6", "cache"})
@RequiredArgsConstructor
@Slf4j
class TestCase5 {

    private final ClubService clubService;
    private final CountryService countryService;

    /**
     * In this scenario :
     * - the 2nd level cache of JPA is enabled for entities
     * - the entity Country is tagged as @Cacheable
     * - we load all the countries
     * - we get the clubs 1 and 2 joining with stadium
     * <p>
     * We can notice that :
     * - When we load the clubs the countrys are not loaded, they are retrieved from the cache.
     * - The stadiums are loaded in the same query then the clubs
     */
    @Test
    void testQueries() {

        // test cache
        log.debug("Cache loaded at beginning");
        countryService.findAll();

        log.debug("Retrieving Clubs with 1, 2 joining with stadium");
        clubService.findByIds(1, 2);

    }

}
