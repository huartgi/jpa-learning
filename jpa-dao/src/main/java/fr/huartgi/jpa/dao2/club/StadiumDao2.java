package fr.huartgi.jpa.dao2.club;

import javax.inject.Named;

import fr.huartgi.jpa.core.dao.club.StadiumDao;
import fr.huartgi.jpa.core.dao.fwk.GenericDao;
import fr.huartgi.jpa.core.domain.club.Stadium;

@Named
public class StadiumDao2 extends GenericDao<Long, Stadium> implements StadiumDao {
	
	public StadiumDao2() {
		super(Stadium.class);
	}

}
