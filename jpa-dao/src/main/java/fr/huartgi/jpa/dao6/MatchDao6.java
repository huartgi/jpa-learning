package fr.huartgi.jpa.dao6;

import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityGraph;
import javax.persistence.TypedQuery;

import fr.huartgi.jpa.core.dao.fwk.GenericDao;
import fr.huartgi.jpa.core.dao.league.MatchDao;
import fr.huartgi.jpa.core.domain.Match;

@Named
public class MatchDao6 extends GenericDao<Long, Match> implements MatchDao {
	
	public MatchDao6() {
		super(Match.class);
	}

	@Override
	public List<Match> findAll() {
		String jpql = "select match from Match match ";
		
		EntityGraph<Match> graph = entityManager.createEntityGraph(Match.class);
		graph.addSubgraph("clubHome").addAttributeNodes("stadium");
		graph.addSubgraph("clubAway").addAttributeNodes("stadium");
		graph.addSubgraph("season").addAttributeNodes("competition");

		TypedQuery<Match> query = entityManager.createQuery(jpql, Match.class);
		query.setHint("javax.persistence.fetchgraph", graph);
		return query.getResultList();
		
	}

}
