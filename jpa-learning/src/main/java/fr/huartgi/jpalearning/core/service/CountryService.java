package fr.huartgi.jpalearning.core.service;

import fr.huartgi.jpalearning.core.dao.CountryDao;
import fr.huartgi.jpalearning.core.domain.Country;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class CountryService {

	private final CountryDao countryDao;
	
	public void create(Country country) {
		countryDao.create(country);
	}

	public List<Country> findAll() {
		log.debug("Loading countries");
		List<Country> countries = countryDao.findAll();
		log.debug("{}  countries found\n\n\n", countries.size());
		return countries;
	}

	public Country findById(Long id) {
		return countryDao.findById(id);
	}

	public Country findByCode(String code) {
		return countryDao.findByCode(code);
	}
	
}
