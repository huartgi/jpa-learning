package fr.huartgi.jpalearning.test4.dao4;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.MatchDao;
import fr.huartgi.jpalearning.core.domain.Match;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import java.util.List;

@Repository
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
