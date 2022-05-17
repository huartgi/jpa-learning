package fr.huartgi.jpalearning;


import fr.huartgi.jpalearning.core.domain.*;
import fr.huartgi.jpalearning.core.service.*;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

@SpringBootTest(classes = {JpaLearningBootApplication.class})
@ActiveProfiles(profiles = {"Test8","cache"})
@Slf4j
public class Test8 {

    @Autowired
    private ClubService clubService;
    @Autowired
    private CountryService countryService;

    /**
     * Loading the clubs and their sublists in one query will fail.
     *
     */
    @Test
    public void testQueries() {

        log.debug("1. Loading countries - Filling cache");
        List<Country> countries = countryService.findAll();
        log.debug(String.format("%d countries found\n", countries.size()));

        log.debug("2. Loading clubs");
        try {
            List<Club> clubs = clubService.findAll();
            log.debug(String.format("%d clubs found\n", clubs.size()));
        }
        catch (Exception e) {
            log.error("Cannot loads multiple sublists for each club of the main list", e);
        }
    }

}
