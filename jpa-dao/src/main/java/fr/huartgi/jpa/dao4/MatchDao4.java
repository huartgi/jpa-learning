package fr.huartgi.jpa.dao4;

import java.util.List;

import javax.inject.Named;
import javax.persistence.TypedQuery;

import fr.huartgi.jpa.core.dao.fwk.GenericDao;
import fr.huartgi.jpa.core.dao.league.MatchDao;
import fr.huartgi.jpa.core.domain.league.Match;

@Named
public class MatchDao4 extends GenericDao<Long, Match> implements MatchDao {
	
	public MatchDao4() {
		super(Match.class);
	}

	@Override
	public List<Match> findAll() {
		String jpql = "select match "
				+ "from Match match "
				+ "join fetch match.clubHome "
				+ "join fetch match.clubAway ";
		
		TypedQuery<Match> query = entityManager.createQuery(jpql, Match.class);
		return query.getResultList();
		
	}

}
