package fr.huartgi.jpalearning.selectnplus1.test1.dao1;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.MatchDao;
import fr.huartgi.jpalearning.core.domain.Match;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import java.util.List;

@Repository
@Profile("Test1")
public class MatchDao1 extends GenericDao<Long, Match> implements MatchDao {
	
	public MatchDao1() {
		super(Match.class);
	}

	@Override
	public List<Match> findAll() {
		String jpql = "select match from Match match ";
		
		TypedQuery<Match> query = entityManager.createQuery(jpql, Match.class);
		return query.getResultList();
		
	}

}
