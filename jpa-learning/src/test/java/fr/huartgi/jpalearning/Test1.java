package fr.huartgi.jpalearning;


import fr.huartgi.jpalearning.core.domain.Club;
import fr.huartgi.jpalearning.core.domain.Match;
import fr.huartgi.jpalearning.core.domain.Player;
import fr.huartgi.jpalearning.core.service.ClubService;
import fr.huartgi.jpalearning.core.service.MatchService;
import fr.huartgi.jpalearning.core.service.PlayerService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

@SpringBootTest(classes = {JpaLearningBootApplication.class})
@ActiveProfiles("Test1")
@Slf4j
public class Test1 {

    @Autowired
    private ClubService clubService;
    @Autowired
    private MatchService matchService;
    @Autowired
    private PlayerService playerService;



    @Test
    public void testQueries() {
        log.debug("\n\n\n");

        log.debug("1. Loading clubs");
        List<Club> clubs = clubService.findAll();
        log.debug(String.format("%d clubs found\n", clubs.size()));

        log.debug("\n\n\n");

        log.debug("2. Loading matches");
        List<Match> matchs = matchService.findAll();
        log.debug(String.format("%d matchs found\n", matchs.size()));

        log.debug("\n\n\n");

        log.debug("3. Loading players");
        List<Player> players = playerService.findAll();
        log.debug(String.format("%d players found\n", players.size()));
    }

}
