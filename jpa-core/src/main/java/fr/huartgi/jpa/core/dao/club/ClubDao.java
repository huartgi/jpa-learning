package fr.huartgi.jpa.core.dao.club;

import java.util.List;

import fr.huartgi.jpa.core.dao.fwk.IGenericDao;
import fr.huartgi.jpa.core.domain.club.Club;

public interface ClubDao extends IGenericDao<Long, Club> {
	
	public List<Club> findAll();

}
