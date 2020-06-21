package fr.huartgi.jpalearning.core.service;

import fr.huartgi.jpalearning.core.dao.ClubDao;
import fr.huartgi.jpalearning.core.domain.Club;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ClubService {

	@Autowired
	private ClubDao clubDao;
	
	public void create(Club club) {
		clubDao.create(club);
	}

	public List<Club> findAll() {
		return clubDao.findAll();
	}
	
}
