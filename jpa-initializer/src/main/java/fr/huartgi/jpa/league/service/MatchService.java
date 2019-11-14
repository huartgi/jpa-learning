package fr.huartgi.jpa.league.service;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.transaction.annotation.Transactional;

import fr.huartgi.jpa.core.domain.league.Match;
import fr.huartgi.jpa.league.dao.MatchDao;

@Named
@Transactional
public class MatchService {

	@Inject
	private MatchDao matchDao;
	
	public void create(Match match) {
		matchDao.create(match);
	}
	
}
