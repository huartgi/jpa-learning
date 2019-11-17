package fr.huartgi.jpa.core.service.club;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.transaction.annotation.Transactional;

import fr.huartgi.jpa.core.dao.club.ClubDao;
import fr.huartgi.jpa.core.dao.club.PlayerDao;
import fr.huartgi.jpa.core.domain.club.Club;
import fr.huartgi.jpa.core.domain.club.Player;

@Named
@Transactional
public class PlayerService {

	@Inject
	private PlayerDao playerDao;
	@Inject
	private ClubDao clubDao;
	
	public void create(Player player) {
		playerDao.create(player);
	}

	public Player findById(Long id) {
		return playerDao.findById(id);
	}

	public List<Player> findAll() {
		return playerDao.findAll();
	}

	public List<Player> findByClub(Club club) {
		return playerDao.findByClub(club);
	}
	public List<Player> findByClub(Long id) {
		return playerDao.findByClub(id);
	}

	public void loadPlayers(Club club) {
		List<Player> players = findByClub(club);
		club.setPlayers(players);
	}

	public void loadPlayers(Long id) {
		Club club =clubDao.findById(id);
		List<Player> players = findByClub(club);
		club.setPlayers(players);
	}
	
}
