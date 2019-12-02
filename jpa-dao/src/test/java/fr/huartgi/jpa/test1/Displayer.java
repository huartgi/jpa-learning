package fr.huartgi.jpa.test1;

import java.util.List;

import fr.huartgi.jpa.core.domain.club.Club;
import fr.huartgi.jpa.core.domain.league.Match;

public class Displayer {
	
	public static void displayClubs(List<Club> clubs) {
		for (Club club : clubs) {
			System.out.printf("%-25s %-7s %-100s\n", club.getName(), club.getCountry().getCode(), club.getStadium().getName());
		}
	}
	
	public static void displayMatchs(List<Match> matchs) {
		for (Match match : matchs) {
			System.out.printf("%25s %-1d - %-1d %-25s\n", match.getClubHome().getName(), match.getGoalHome(), match.getGoalAway(), match.getClubAway().getName());
		}
	}
	

}
