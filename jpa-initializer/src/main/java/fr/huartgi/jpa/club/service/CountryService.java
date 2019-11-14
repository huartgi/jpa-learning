package fr.huartgi.jpa.club.service;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.transaction.annotation.Transactional;

import fr.huartgi.jpa.club.dao.CountryDao;
import fr.huartgi.jpa.core.domain.club.Country;

@Named
@Transactional
public class CountryService {

	@Inject
	private CountryDao countryDao;
	
	public void create(Country country) {
		countryDao.create(country);
	}
	
}
