package fr.huartgi.jpalearning;

import fr.huartgi.jpalearning.core.domain.Club;
import fr.huartgi.jpalearning.core.domain.Country;
import fr.huartgi.jpalearning.core.service.ClubService;
import fr.huartgi.jpalearning.core.service.CountryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

@SpringBootTest(classes = {JpaLearningBootApplication.class})
@ActiveProfiles(profiles = {"dao8","cache"})
@RequiredArgsConstructor
@Slf4j
class TestCase8 {

    private final ClubService clubService;
    private final CountryService countryService;

    /**
     * Loading the clubs and their sublists in one query will fail.
     *
     */
    @Test
    void testQueries() {

        List<Country> countries = countryService.findAll();

        try {
            List<Club> clubs = clubService.findAll();
        }
        catch (Exception e) {
            log.error("Cannot loads multiple sublists for each club of the main list", e);
        }
    }

}
