package fr.huartgi.jpa.core.dao.club;

import java.util.List;

import fr.huartgi.jpa.core.dao.fwk.IGenericDao;
import fr.huartgi.jpa.core.domain.club.Stadium;

public interface StadiumDao extends IGenericDao<Long, Stadium> {

	public List<Stadium> findAll();

}
