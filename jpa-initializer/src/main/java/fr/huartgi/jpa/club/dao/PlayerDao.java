package fr.huartgi.jpa.club.dao;

import javax.inject.Named;

import fr.huartgi.jpa.core.dao.fwk.GenericDao;
import fr.huartgi.jpa.core.domain.club.Player;

@Named
public class PlayerDao extends GenericDao<Long, Player> {
	
	public PlayerDao() {
		super(Player.class);
	}

}
