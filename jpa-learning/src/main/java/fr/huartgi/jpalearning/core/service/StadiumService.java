package fr.huartgi.jpalearning.core.service;

import fr.huartgi.jpalearning.core.dao.StadiumDao;
import fr.huartgi.jpalearning.core.domain.Stadium;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class StadiumService {

	private final StadiumDao stadiumDao;
	
	public void create(Stadium stadium) {
		stadiumDao.create(stadium);
	}

	public List<Stadium> findAll() {
		log.debug("Loading stadiums");
		List<Stadium> stadiums = stadiumDao.findAll();
		log.debug("{}  stadiums found\n\n\n", stadiums.size());
		return stadiums;
	}
	
}
