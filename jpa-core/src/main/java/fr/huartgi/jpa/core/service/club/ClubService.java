package fr.huartgi.jpa.core.service.club;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.transaction.annotation.Transactional;

import fr.huartgi.jpa.core.dao.club.ClubDao;
import fr.huartgi.jpa.core.domain.Club;

@Named
@Transactional
public class ClubService {

	@Inject
	private ClubDao clubDao;
	
	public void create(Club club) {
		clubDao.create(club);
	}

	public List<Club> findAll() {
		return clubDao.findAll();
	}
	
}
