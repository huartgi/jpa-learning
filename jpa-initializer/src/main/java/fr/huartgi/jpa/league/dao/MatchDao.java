package fr.huartgi.jpa.league.dao;

import javax.inject.Named;

import fr.huartgi.jpa.core.dao.fwk.GenericDao;
import fr.huartgi.jpa.core.domain.league.Match;

@Named
public class MatchDao extends GenericDao<Long, Match> {
	
	public MatchDao() {
		super(Match.class);
	}

}
