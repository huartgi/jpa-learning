package fr.huartgi.jpa.club.dao;

import javax.inject.Named;

import fr.huartgi.jpa.core.dao.fwk.GenericDao;
import fr.huartgi.jpa.core.domain.club.Country;

@Named
public class CountryDao extends GenericDao<Long, Country> {
	
	public CountryDao() {
		super(Country.class);
	}

}
