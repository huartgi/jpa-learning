package fr.huartgi.jpa.core.service.club;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.transaction.annotation.Transactional;

import fr.huartgi.jpa.core.dao.club.CountryDao;
import fr.huartgi.jpa.core.domain.Country;

@Named
@Transactional
public class CountryService {

	@Inject
	private CountryDao countryDao;
	
	public void create(Country country) {
		countryDao.create(country);
	}

	public List<Country> findAll() {
		return countryDao.findAll();
	}

	public Country findById(Long id) {
		return countryDao.findById(id);
	}

	public Country findByCode(String code) {
		return countryDao.findByCode(code);
	}
	
}
