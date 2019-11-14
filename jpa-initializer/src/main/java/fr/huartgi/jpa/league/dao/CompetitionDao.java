package fr.huartgi.jpa.league.dao;

import javax.inject.Named;

import fr.huartgi.jpa.core.dao.fwk.GenericDao;
import fr.huartgi.jpa.core.domain.league.Competition;

@Named
public class CompetitionDao extends GenericDao<Long, Competition> {
	
	public CompetitionDao() {
		super(Competition.class);
	}

}
