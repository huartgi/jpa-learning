package fr.huartgi.jpa.initializer.importer;

import fr.huartgi.jpa.core.domain.Club;
import fr.huartgi.jpa.core.domain.Match;
import fr.huartgi.jpa.core.service.league.MatchService;
import org.terracotta.statistics.jsr166e.ThreadLocalRandom;

import javax.inject.Inject;
import javax.inject.Named;

@Named
public class MatchCreater {
	
	@Inject
	private MatchService matchService;
	@Inject
	private ClubImporter clubImporter;
	
	public void createMatchs() {
		
		for (Club home : clubImporter.getClubs()) {
			for (Club away : clubImporter.getClubs()) {
				if (home.getId() != away.getId()) {
					matchService.create(new Match(home, getRandomGoal(), away, getRandomGoal()));
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
