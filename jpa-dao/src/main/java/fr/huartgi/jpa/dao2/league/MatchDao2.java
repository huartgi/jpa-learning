package fr.huartgi.jpa.dao2.league;

import java.util.List;

import javax.inject.Named;
import javax.persistence.TypedQuery;

import fr.huartgi.jpa.core.dao.fwk.GenericDao;
import fr.huartgi.jpa.core.dao.league.MatchDao;
import fr.huartgi.jpa.core.domain.league.Match;

@Named
public class MatchDao2 extends GenericDao<Long, Match> implements MatchDao {
	
	public MatchDao2() {
		super(Match.class);
	}

	public List<Match> findAll() {
		String jpql = "select match from Match match ";
		
		TypedQuery<Match> query = entityManager.createQuery(jpql, Match.class);
		return query.getResultList();
		
	}

}
