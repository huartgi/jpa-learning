package fr.huartgi.jpa.club.service;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.transaction.annotation.Transactional;

import fr.huartgi.jpa.club.dao.StadiumDao;
import fr.huartgi.jpa.core.domain.club.Stadium;

@Named
@Transactional
public class StadiumService {

	@Inject
	private StadiumDao stadiumDao;
	
	public void create(Stadium stadium) {
		stadiumDao.create(stadium);
	}
	
}
