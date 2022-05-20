package fr.huartgi.jpalearning.core.service;

import fr.huartgi.jpalearning.core.dao.MatchDao;
import fr.huartgi.jpalearning.core.domain.Match;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class MatchService {

	private final MatchDao matchDao;
	
	public void create(Match match) {
		matchDao.create(match);
	}

	public List<Match> findAll() {
		log.debug("4. Loading matchs");
		List<Match> matchs = matchDao.findAll();
		log.debug("{}  matchs found\n\n\n", matchs.size());
		return matchs;
	}
	
}
