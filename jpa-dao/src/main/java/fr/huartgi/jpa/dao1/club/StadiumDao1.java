package fr.huartgi.jpa.dao1.club;

import javax.inject.Named;

import fr.huartgi.jpa.core.dao.club.StadiumDao;
import fr.huartgi.jpa.core.dao.fwk.GenericDao;
import fr.huartgi.jpa.core.domain.club.Stadium;

@Named
public class StadiumDao1 extends GenericDao<Long, Stadium> implements StadiumDao {
	
	public StadiumDao1() {
		super(Stadium.class);
	}

}
