package fr.huartgi.jpa.club.service;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.transaction.annotation.Transactional;

import fr.huartgi.jpa.club.dao.PlayerDao;
import fr.huartgi.jpa.core.domain.club.Player;

@Named
@Transactional
public class PlayerService {

	@Inject
	private PlayerDao playerDao;
	
	public void create(Player player) {
		playerDao.create(player);
	}
	
}
