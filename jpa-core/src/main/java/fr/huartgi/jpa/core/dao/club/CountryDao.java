package fr.huartgi.jpa.core.dao.club;

import java.util.List;

import fr.huartgi.jpa.core.dao.fwk.IGenericDao;
import fr.huartgi.jpa.core.domain.Country;

public interface CountryDao extends IGenericDao<Long, Country>  {
	
	public List<Country> findAll();

	public Country findByCode(String code);
	
}
