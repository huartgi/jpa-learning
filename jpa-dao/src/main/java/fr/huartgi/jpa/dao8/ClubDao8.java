package fr.huartgi.jpa.dao8;

import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityGraph;
import javax.persistence.Subgraph;
import javax.persistence.TypedQuery;

import fr.huartgi.jpa.core.dao.club.ClubDao;
import fr.huartgi.jpa.core.dao.fwk.GenericDao;
import fr.huartgi.jpa.core.domain.Club;
import fr.huartgi.jpa.core.domain.Match;

@Named
public class ClubDao8 extends GenericDao<Long, Club> implements ClubDao {
	
	public ClubDao8() {
		super(Club.class);
	}

	@Override
	public List<Club> findAll() {
		
		String jpql = "select club "
				+ "from Club club ";
		
		EntityGraph<Club> graph = entityManager.createEntityGraph(Club.class);
		graph.addAttributeNodes("stadium");
		
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
		graph.addAttributeNodes("players");
		fetch(clubs, graph);
	}
	
	private void fetchMatchesHome(List<Club> clubs) {
		EntityGraph<Club> graph = entityManager.createEntityGraph(Club.class);
		Subgraph<Match> sgMatch = graph.addSubgraph("matchesHome");
		Subgraph<Match> season = sgMatch.addSubgraph("season");
		season.addAttributeNodes("competition");
		fetch(clubs, graph);
	}
	
	private void fetchMatchesAway(List<Club> clubs) {
		EntityGraph<Club> graph = entityManager.createEntityGraph(Club.class);
		Subgraph<Match> sgMatch = graph.addSubgraph("matchesAway");
		Subgraph<Match> season = sgMatch.addSubgraph("season");
		season.addAttributeNodes("competition");
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
