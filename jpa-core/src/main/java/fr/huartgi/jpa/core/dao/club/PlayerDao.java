package fr.huartgi.jpa.core.dao.club;

import java.util.List;

import fr.huartgi.jpa.core.dao.fwk.IGenericDao;
import fr.huartgi.jpa.core.domain.club.Club;
import fr.huartgi.jpa.core.domain.club.Player;

public interface PlayerDao extends IGenericDao<Long, Player> {
	
	public List<Player> findAll();

	public List<Player> findByClub(Club club);

	public List<Player> findByClub(Long id);

}
