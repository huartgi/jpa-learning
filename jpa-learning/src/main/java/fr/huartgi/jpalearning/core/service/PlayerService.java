package fr.huartgi.jpalearning.core.service;

import fr.huartgi.jpalearning.core.dao.ClubDao;
import fr.huartgi.jpalearning.core.dao.PlayerDao;
import fr.huartgi.jpalearning.core.domain.Club;
import fr.huartgi.jpalearning.core.domain.Player;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class PlayerService {

	private final PlayerDao playerDao;
	private final ClubDao clubDao;
	
	public void create(Player player) {
		playerDao.create(player);
	}

	public Player findById(Long id) {
		return playerDao.findById(id);
	}

	public List<Player> findAll() {
		log.debug("5. Loading players");
		List<Player> players = playerDao.findAll();
		log.debug("{}  players found\n\n\n", players.size());
		return players;
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
