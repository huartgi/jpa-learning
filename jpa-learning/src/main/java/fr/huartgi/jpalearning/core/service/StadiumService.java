package fr.huartgi.jpalearning.core.service;

import fr.huartgi.jpalearning.core.dao.StadiumDao;
import fr.huartgi.jpalearning.core.domain.Stadium;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class StadiumService {

	@Autowired
	private StadiumDao stadiumDao;
	
	public void create(Stadium stadium) {
		stadiumDao.create(stadium);
	}

	public List<Stadium> findAll() {
		return stadiumDao.findAll();
	}
	
}
