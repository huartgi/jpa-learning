package fr.huartgi.jpa.core.service.club;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.transaction.annotation.Transactional;

import fr.huartgi.jpa.core.dao.club.StadiumDao;
import fr.huartgi.jpa.core.domain.club.Stadium;

@Named
@Transactional
public class StadiumService {

	@Inject
	private StadiumDao stadiumDao;
	
	public void create(Stadium stadium) {
		stadiumDao.create(stadium);
	}

	public List<Stadium> findAll() {
		return stadiumDao.findAll();
	}
	
}
