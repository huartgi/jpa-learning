package fr.huartgi.jpalearning;

import fr.huartgi.jpalearning.core.domain.Club;
import fr.huartgi.jpalearning.core.domain.Country;
import fr.huartgi.jpalearning.core.domain.Match;
import fr.huartgi.jpalearning.core.domain.Player;
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
@ActiveProfiles(profiles = {"dao9","cache"})
@RequiredArgsConstructor
@Slf4j
class TestCase9 {

    private final ClubService clubService;
    private final CountryService countryService;

    /**
     * Loading the clubs and their sublists in one query will fail.
     * We follow the strategy of multiple bag fetching :
     * http://stackoverflow.com/questions/9607207/how-to-left-join-fetch-multiple-children-in-hibernate/9607919#9607919
     * https://stackoverflow.com/questions/4334970/hibernate-throws-multiplebagfetchexception-cannot-simultaneously-fetch-multipl/51055523?stw=2#51055523
     * https://vladmihalcea.com/hibernate-multiplebagfetchexception/
     *
     */
    @Test
    void testQueries() {

        log.debug("1. Loading countries");
        List<Country> countries = countryService.findAll();
        log.debug("{}  countries found\n\n\n", countries.size());

        log.debug("2. Loading clubs");
        List<Club> clubs = clubService.findAll();
        log.debug("{}  clubs found\n\n\n", clubs.size());

        displayPlayers(clubs.get(0));

        displayMatchs(clubs.get(0).getMatchesHome());
    }

    static void displayPlayers(Club club) {
        for (Player player : club.getPlayers()) {
            System.out.printf("%25s (%s) - %-25s\n", player.getName(), player.getCountry().getCode(), player.getClub().getName());
        }
    }

    static void displayMatchs(List<Match> matchs) {
        for (Match match : matchs) {
            System.out.printf("%25s %-1d - %-1d %-25s\n", match.getClubHome().getName(), match.getGoalHome(), match.getGoalAway(), match.getClubAway().getName());
        }
    }

}
