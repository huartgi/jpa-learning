package fr.huartgi.jpa.initializer.service;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.transaction.annotation.Transactional;

import fr.huartgi.jpa.core.domain.league.Competition;
import fr.huartgi.jpa.initializer.dao.CompetitionDao;

@Named
@Transactional
public class CompetitionService {

	@Inject
	private CompetitionDao competitionDao;
	
	public void create(Competition competition) {
		competitionDao.create(competition);
	}
	
}
