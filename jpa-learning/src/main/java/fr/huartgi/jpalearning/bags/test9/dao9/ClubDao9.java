package fr.huartgi.jpalearning.bags.test9.dao9;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.ClubDao;
import fr.huartgi.jpalearning.core.domain.Club;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityGraph;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
@Profile("Test9")
public class ClubDao9 extends GenericDao<Long, Club> implements ClubDao {
	
	public ClubDao9() {
		super(Club.class);
	}

	@Override
	public List<Club> findAll() {
		
		String jpql = "select club "
				+ "from Club club ";
		
		EntityGraph<Club> graph = entityManager.createEntityGraph(Club.class);
		graph.addAttributeNodes("stadium", "country");
		
		TypedQuery<Club> query = entityManager.createQuery(jpql, Club.class);
		query.setHint("javax.persistence.fetchgraph", graph);
		List<Club> clubs = query.getResultList();
		
		fetchPlayers(clubs);
		fetchMatchesHome(clubs);
		fetchMatchesAway(clubs);
		
		return clubs;
	}
	

	private void fetchPlayers(List<Club> clubs) {
		EntityGraph<Club> graph = entityManager.createEntityGraph(Club.class);
		graph.addSubgraph("players");
		fetch(clubs, graph);
	}
	
	private void fetchMatchesHome(List<Club> clubs) {
		EntityGraph<Club> graph = entityManager.createEntityGraph(Club.class);
		graph.addSubgraph("matchesHome");
		fetch(clubs, graph);
	}
	
	private void fetchMatchesAway(List<Club> clubs) {
		EntityGraph<Club> graph = entityManager.createEntityGraph(Club.class);
		graph.addSubgraph("matchesAway");
		fetch(clubs, graph);
	}
	
	private void fetch (List<Club> clubs, EntityGraph<Club> graph) {
		String jpql = "select club " 
				+ "from Club club "
				+ "where club in :clubs ";
		
		TypedQuery<Club> query = entityManager.createQuery(jpql, Club.class);
		query.setHint("javax.persistence.fetchgraph", graph);
		query.setParameter("clubs", clubs);
		query.getResultList();
	}

}
