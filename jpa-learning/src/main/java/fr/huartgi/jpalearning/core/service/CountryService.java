package fr.huartgi.jpalearning.core.service;

import fr.huartgi.jpalearning.core.dao.CountryDao;
import fr.huartgi.jpalearning.core.domain.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CountryService {

	@Autowired
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
