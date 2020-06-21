package fr.huartgi.jpalearning.test1;

import fr.huartgi.jpalearning.core.common.TechnicalDao;
import fr.huartgi.jpalearning.core.domain.Club;
import fr.huartgi.jpalearning.core.domain.Match;
import fr.huartgi.jpalearning.core.domain.Player;
import fr.huartgi.jpalearning.core.service.ClubService;
import fr.huartgi.jpalearning.core.service.MatchService;
import fr.huartgi.jpalearning.core.service.PlayerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Tester1 {

    private static final Logger logger = LoggerFactory.getLogger(Tester1.class);

    @Autowired
    private ClubService clubService;
    @Autowired
    private MatchService matchService;
    @Autowired
    private PlayerService playerService;

    @Autowired
    private TechnicalDao technicalDao;


    public void testQueries() {

        technicalDao.triggerSchemaGeneration();

        logger.debug("\n\n\n");

        logger.debug("1. Loading clubs");
        List<Club> clubs = clubService.findAll();
        logger.debug(String.format("%d clubs found\n", clubs.size()));

        logger.debug("\n\n\n");

        logger.debug("2. Loading matches");
        List<Match> matchs = matchService.findAll();
        logger.debug(String.format("%d matchs found\n", matchs.size()));

        logger.debug("\n\n\n");

        logger.debug("3. Loading players");
        List<Player> players = playerService.findAll();
        logger.debug(String.format("%d players found\n", players.size()));
    }
}
