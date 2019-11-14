package fr.huartgi.jpa.club.importer;

import java.util.Calendar;
import java.util.Date;
import java.util.concurrent.ThreadLocalRandom;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.inject.Named;

import com.github.javafaker.Faker;

import fr.huartgi.jpa.club.service.PlayerService;
import fr.huartgi.jpa.core.domain.club.Club;
import fr.huartgi.jpa.core.domain.club.Player;

@Named
public class PlayerCreater {

	private Faker faker = new Faker();

	private Date birthdateMin;
	private Date birthdateMax;
	
	@Inject
	private PlayerService playerService;
	@Inject 
	private CountryImporter countryImporter;
	
	
	@PostConstruct
	protected void initBean() {
		Calendar min = Calendar.getInstance();
		min.set(1975, Calendar.JANUARY, 1);
		birthdateMin = min.getTime();
		Calendar max = Calendar.getInstance();
		max.set(2003, Calendar.DECEMBER, 31);
		birthdateMax = max.getTime();
	}
	
	/**
	 * Creates and adds a number of Players to a Club
	 * @param club
	 * @param nbPlayersToAdd
	 */
	public void addPlayers(Club club, Integer nbPlayersToAdd) {
		for (int i = 0; i<20; i++) {
			fakePlayer(club);
		}
	}
	
	/**
	 * Creates a fake Player and adds it to a Club
	 * @param club
	 * @return
	 */
	private Player fakePlayer(Club club) {
		Player p = new Player();
		p.setName(faker.name().lastName());
		p.setClub(club);
		// 80% chance the player's country is the club's country
		if (ThreadLocalRandom.current().nextInt(1, 11) <=8 )
			p.setCountry(club.getCountry());
		else
			p.setCountry(countryImporter.getRandomCountry());
		p.setBirthdate(faker.date().between(birthdateMin, birthdateMax));
		playerService.create(p);
		
		return p;
	}
}
