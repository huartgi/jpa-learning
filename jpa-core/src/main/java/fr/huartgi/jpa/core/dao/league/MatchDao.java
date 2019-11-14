package fr.huartgi.jpa.core.dao.league;

import java.util.List;

import fr.huartgi.jpa.core.dao.fwk.IGenericDao;
import fr.huartgi.jpa.core.domain.league.Match;

public interface MatchDao extends IGenericDao<Long, Match> {

	public List<Match> findAll();

}
