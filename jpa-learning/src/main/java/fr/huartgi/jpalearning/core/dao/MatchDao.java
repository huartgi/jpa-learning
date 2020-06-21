package fr.huartgi.jpalearning.core.dao;

import fr.huartgi.jpalearning.core.common.IGenericDao;
import fr.huartgi.jpalearning.core.domain.Match;

import java.util.List;

public interface MatchDao extends IGenericDao<Long, Match> {

	public List<Match> findAll();

}
