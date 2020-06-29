package fr.huartgi.jpalearning.test9.dao9;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.MatchDao;
import fr.huartgi.jpalearning.core.domain.Match;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityGraph;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class MatchDao9 extends GenericDao<Long, Match> implements MatchDao {
	
	public MatchDao9() {
		super(Match.class);
	}

	@Override
	public List<Match> findAll() {
		String jpql = "select match from Match match ";
		
		EntityGraph<Match> graph = entityManager.createEntityGraph(Match.class);
		graph.addSubgraph("clubHome").addAttributeNodes("stadium");
		graph.addSubgraph("clubAway").addAttributeNodes("stadium");

		TypedQuery<Match> query = entityManager.createQuery(jpql, Match.class);
		query.setHint("javax.persistence.fetchgraph", graph);
		return query.getResultList();
		
	}

}
