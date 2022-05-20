package fr.huartgi.jpalearning.core.service;

import fr.huartgi.jpalearning.core.dao.ClubDao;
import fr.huartgi.jpalearning.core.domain.Club;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class ClubService {

	private final ClubDao clubDao;
	
	public void create(Club club) {
		clubDao.create(club);
	}

	public List<Club> findAll() {
		log.debug("Loading clubs");
		List<Club> clubs = clubDao.findAll();
		log.debug("{}  clubs found\n\n\n", clubs.size());
		return clubs;
	}
	
}
