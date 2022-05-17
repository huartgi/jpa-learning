package fr.huartgi.jpalearning;


import fr.huartgi.jpalearning.core.domain.Club;
import fr.huartgi.jpalearning.core.domain.Country;
import fr.huartgi.jpalearning.core.domain.Match;
import fr.huartgi.jpalearning.core.domain.Player;
import fr.huartgi.jpalearning.core.service.ClubService;
import fr.huartgi.jpalearning.core.service.CountryService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

@SpringBootTest(classes = {JpaLearningBootApplication.class})
@ActiveProfiles(profiles = {"Test9","cache"})
@Slf4j
public class Test9 {

    @Autowired
    private ClubService clubService;
    @Autowired
    private CountryService countryService;

    /**
     * Loading the clubs and their sublists in one query will fail.
     * We follow the strategy of multiple bag fetching :
     * http://stackoverflow.com/questions/9607207/how-to-left-join-fetch-multiple-children-in-hibernate/9607919#9607919
     * https://stackoverflow.com/questions/4334970/hibernate-throws-multiplebagfetchexception-cannot-simultaneously-fetch-multipl/51055523?stw=2#51055523
     * https://vladmihalcea.com/hibernate-multiplebagfetchexception/
     *
     */
    @Test
    public void testQueries() {

        log.debug("1. Loading countries");
        List<Country> countries = countryService.findAll();
        log.debug(String.format("%d countries found\n", countries.size()));

        log.debug("\n\n\n");

        log.debug("2. Loading clubs");
        List<Club> clubs = clubService.findAll();
        log.debug(String.format("%d clubs found\n", clubs.size()));

        log.debug("\n\n\n");

        displayPlayers(clubs.get(0));

        log.debug("\n\n\n");

        displayMatchs(clubs.get(0).getMatchesHome());
    }

    public static void displayPlayers(Club club) {
        for (Player player : club.getPlayers()) {
            System.out.printf("%25s (%s) - %-25s\n", player.getName(), player.getCountry().getCode(), player.getClub().getName());
        }
    }

    public static void displayMatchs(List<Match> matchs) {
        for (Match match : matchs) {
            System.out.printf("%25s %-1d - %-1d %-25s\n", match.getClubHome().getName(), match.getGoalHome(), match.getGoalAway(), match.getClubAway().getName());
        }
    }

}
