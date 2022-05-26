package fr.huartgi.jpalearning.core.dao;

import fr.huartgi.jpalearning.core.common.IGenericDao;
import fr.huartgi.jpalearning.core.domain.Club;

import java.util.List;

public interface ClubDao extends IGenericDao<Integer, Club> {

	public List<Club> findAll();

	public List<Club> findByIds(Integer... ids);

}
