package fr.huartgi.jpalearning.core.dao;

import fr.huartgi.jpalearning.core.common.IGenericDao;
import fr.huartgi.jpalearning.core.domain.Country;

import java.util.List;

public interface CountryDao extends IGenericDao<Long, Country> {
	
	public List<Country> findAll();

	public Country findByCode(String code);
	
}
