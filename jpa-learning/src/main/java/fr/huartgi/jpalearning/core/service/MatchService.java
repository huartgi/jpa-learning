package fr.huartgi.jpalearning.core.service;

import fr.huartgi.jpalearning.core.dao.MatchDao;
import fr.huartgi.jpalearning.core.domain.Match;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class MatchService {

	@Autowired
	private MatchDao matchDao;
	
	public void create(Match match) {
		matchDao.create(match);
	}

	public List<Match> findAll() {
		return matchDao.findAll();
	}
	
}
