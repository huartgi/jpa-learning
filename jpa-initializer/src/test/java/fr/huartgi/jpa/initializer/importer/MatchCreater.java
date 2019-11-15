package fr.huartgi.jpa.initializer.importer;

import java.util.concurrent.ThreadLocalRandom;

import javax.inject.Inject;
import javax.inject.Named;

import fr.huartgi.jpa.core.domain.club.Club;
import fr.huartgi.jpa.core.domain.league.Competition;
import fr.huartgi.jpa.core.domain.league.Match;
import fr.huartgi.jpa.core.domain.league.Season;
import fr.huartgi.jpa.core.service.league.MatchService;
import fr.huartgi.jpa.initializer.service.CompetitionService;
import fr.huartgi.jpa.initializer.service.SeasonService;

@Named
public class MatchCreater {
	
	@Inject
	private MatchService matchService;
	@Inject
	private SeasonService seasonService;
	@Inject
	private CompetitionService competitionService;
	@Inject
	private ClubImporter clubImporter;
	
	public void createMatchs() {
		
		Competition frenchLeague = new Competition("French League");
		competitionService.create(frenchLeague);
		for (int year=2000; year<=2019; year++) {
			Season season = new Season(frenchLeague, year);
			seasonService.create(season);
			for (Club home : clubImporter.getFrenchClubs()) {
				for (Club away : clubImporter.getFrenchClubs()) {
					if (home.getId() != away.getId()) {
						matchService.create(new Match(home, getRandomGoal(), away, getRandomGoal(), season));
					}
				}
			}
		}
		
		Competition euroLeague = new Competition("Euro League");
		competitionService.create(euroLeague);
		for (int year=2000; year<=2019; year++) {
			Season season = new Season(euroLeague, year);
			seasonService.create(season);
			for (Club home : clubImporter.getEuropeanClubs()) {
				for (Club away : clubImporter.getEuropeanClubs()) {
					if (home.getId() != away.getId()) {
						matchService.create(new Match(home, getRandomGoal(), away, getRandomGoal(), season));
					}
				}
			}
		}
	}
	
	private int getRandomGoal() {
		int min = 0;
		int max = 6;
		return ThreadLocalRandom.current().nextInt(min, max);
	}
	

}
