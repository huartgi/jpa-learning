package fr.huartgi.jpalearning.core.dao;

import fr.huartgi.jpalearning.core.common.IGenericDao;
import fr.huartgi.jpalearning.core.domain.Stadium;

import java.util.List;

public interface StadiumDao extends IGenericDao<Long, Stadium> {

	public List<Stadium> findAll();

}
