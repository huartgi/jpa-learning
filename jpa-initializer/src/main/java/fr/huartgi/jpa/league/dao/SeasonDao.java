package fr.huartgi.jpa.league.dao;

import javax.inject.Named;

import fr.huartgi.jpa.core.dao.fwk.GenericDao;
import fr.huartgi.jpa.core.domain.league.Season;

@Named
public class SeasonDao extends GenericDao<Long, Season> {
	
	public SeasonDao() {
		super(Season.class);
	}

}
