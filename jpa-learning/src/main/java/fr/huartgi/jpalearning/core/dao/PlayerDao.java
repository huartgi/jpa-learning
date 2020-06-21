package fr.huartgi.jpalearning.core.dao;

import fr.huartgi.jpalearning.core.common.IGenericDao;
import fr.huartgi.jpalearning.core.domain.Club;
import fr.huartgi.jpalearning.core.domain.Player;

import java.util.List;

public interface PlayerDao extends IGenericDao<Long, Player> {
	
	public List<Player> findAll();

	public List<Player> findByClub(Club club);

	public List<Player> findByClub(Long id);

}
