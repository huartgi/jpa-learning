package fr.huartgi.jpa.club.dao;

import javax.inject.Named;

import fr.huartgi.jpa.core.dao.fwk.GenericDao;
import fr.huartgi.jpa.core.domain.club.Club;

@Named
public class ClubDao extends GenericDao<Long, Club> {
	
	public ClubDao() {
		super(Club.class);
	}

}
