package fr.huartgi.jpalearning.core.service;

import fr.huartgi.jpalearning.core.dao.ClubDao;
import fr.huartgi.jpalearning.core.dao.PlayerDao;
import fr.huartgi.jpalearning.core.domain.Club;
import fr.huartgi.jpalearning.core.domain.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PlayerService {

	@Autowired
	private PlayerDao playerDao;
	@Autowired
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
