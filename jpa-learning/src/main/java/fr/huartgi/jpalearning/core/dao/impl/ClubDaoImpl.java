package fr.huartgi.jpalearning.core.dao.impl;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.ClubDao;
import fr.huartgi.jpalearning.core.domain.Club;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityGraph;
import javax.persistence.Subgraph;
import javax.persistence.TypedQuery;
import java.util.Arrays;
import java.util.List;

@Repository
@Profile("local")
public class ClubDaoImpl extends GenericDao<Integer, Club> implements ClubDao {

	public ClubDaoImpl() {
		super(Club.class);
	}

	@Override
	public List<Club> findAll() {

		String jpql = "select club "
				+ "from Club club ";
		
		EntityGraph<Club> graph = entityManager.createEntityGraph(Club.class);
		graph.addAttributeNodes("country");
		graph.addAttributeNodes("stadium");

		TypedQuery<Club> query = entityManager.createQuery(jpql, Club.class);
		query.setHint("javax.persistence.fetchgraph", graph);
		List<Club> clubs = query.getResultList();

		// LOAD PLAYERS With countries

		EntityGraph<Club> playersGraph = entityManager.createEntityGraph(Club.class);
		Subgraph<Object> playersSubGraph = playersGraph.addSubgraph("players");
		playersSubGraph.addAttributeNodes("country");

		TypedQuery<Club> playersQuery = entityManager.createQuery(jpql, Club.class);
		playersQuery.setHint("javax.persistence.fetchgraph", playersGraph);

		playersQuery.getResultList();

		/*

		// LOAD MATCHES HOME

		EntityGraph<Club> matchesHomeGraph = entityManager.createEntityGraph(Club.class);
		matchesHomeGraph.addAttributeNodes("matchesHome");

		TypedQuery<Club> matchesHomeQuery = entityManager.createQuery(jpql, Club.class);
		matchesHomeQuery.setHint("javax.persistence.fetchgraph", matchesHomeGraph);

		matchesHomeQuery.getResultList();

		// LOAD MATCHES AWAY

		EntityGraph<Club> matchesAwayGraph = entityManager.createEntityGraph(Club.class);
		matchesAwayGraph.addAttributeNodes("matchesAway");

		TypedQuery<Club> matchesAwayQuery = entityManager.createQuery(jpql, Club.class);
		matchesAwayQuery.setHint("javax.persistence.fetchgraph", matchesAwayGraph);

		matchesAwayQuery.getResultList();

		 */

		return clubs;
	}

	@Override
	public List<Club> findByIds(Integer... ids) {
		String jpql = "select club from Club club where club.id in :ids";
		TypedQuery<Club> query = entityManager.createQuery(jpql, Club.class);
		query.setParameter("ids", Arrays.asList(ids));
		return query.getResultList();
	}

}
