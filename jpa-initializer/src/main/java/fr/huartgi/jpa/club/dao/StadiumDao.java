package fr.huartgi.jpa.club.dao;

import javax.inject.Named;

import fr.huartgi.jpa.core.dao.fwk.GenericDao;
import fr.huartgi.jpa.core.domain.club.Stadium;

@Named
public class StadiumDao extends GenericDao<Long, Stadium> {
	
	public StadiumDao() {
		super(Stadium.class);
	}

}
