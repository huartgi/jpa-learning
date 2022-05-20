package fr.huartgi.jpalearning.selectnplus1.dao5;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.MatchDao;
import fr.huartgi.jpalearning.core.domain.Match;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityGraph;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
@Profile("dao5")
public class MatchDao5 extends GenericDao<Long, Match> implements MatchDao {
	
	public MatchDao5() {
		super(Match.class);
	}

	@Override
	public List<Match> findAll() {
		String jpql = "select match from Match match ";
		
		EntityGraph<Match> graph = entityManager.createEntityGraph(Match.class);
		graph.addAttributeNodes("clubHome", "clubAway");

		TypedQuery<Match> query = entityManager.createQuery(jpql, Match.class);
		query.setHint("javax.persistence.loadgraph", graph);
		return query.getResultList();
		
	}

}
