package fr.huartgi.jpa.club.service;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.transaction.annotation.Transactional;

import fr.huartgi.jpa.club.dao.ClubDao;
import fr.huartgi.jpa.core.domain.club.Club;

@Named
@Transactional
public class ClubService {

	@Inject
	private ClubDao clubDao;
	
	public void create(Club club) {
		clubDao.create(club);
	}
	
}
