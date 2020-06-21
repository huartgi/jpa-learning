package fr.huartgi.jpa.core.service.league;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.transaction.annotation.Transactional;

import fr.huartgi.jpa.core.dao.league.MatchDao;
import fr.huartgi.jpa.core.domain.Match;

@Named
@Transactional
public class MatchService {

	@Inject
	private MatchDao matchDao;
	
	public void create(Match match) {
		matchDao.create(match);
	}

	public List<Match> findAll() {
		return matchDao.findAll();
	}
	
}
