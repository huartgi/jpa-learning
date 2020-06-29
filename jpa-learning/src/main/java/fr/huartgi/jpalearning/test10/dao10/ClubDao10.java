package fr.huartgi.jpalearning.test10.dao10;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.ClubDao;
import fr.huartgi.jpalearning.core.domain.Club;
import fr.huartgi.jpalearning.core.domain.Match;
import fr.huartgi.jpalearning.core.domain.Player;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityGraph;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class ClubDao10 extends GenericDao<Long, Club> implements ClubDao {
	
	public ClubDao10() {
		super(Club.class);
	}

	@Override
	public List<Club> findAll() {
		
		String jpql = "select club from Club club ";
		
		EntityGraph<Club> graph = entityManager.createEntityGraph(Club.class);
		graph.addAttributeNodes("stadium");
		
		TypedQuery<Club> query = entityManager.createQuery(jpql, Club.class);
		query.setHint("javax.persistence.fetchgraph", graph);
		List<Club> clubs = query.getResultList();
		
		fetchPlayers(clubs);
		fetchMatches(clubs);
		
		return clubs;
	}
	

	private void fetchPlayers(List<Club> clubs) {
		String jpql = "select player from Player player where player.club in :clubs ";
		TypedQuery<Player> query = entityManager.createQuery(jpql, Player.class);
		EntityGraph<Player> graph = entityManager.createEntityGraph(Player.class);
		graph.addSubgraph("country");
		query.setHint("javax.persistence.fetchgraph", graph);
		query.setParameter("clubs", clubs);
		query.getResultList();
	}
	
	private void fetchMatches(List<Club> clubs) {
		String jpql = "select match from Match match where match.clubHome in :clubs or match.clubAway in :clubs";
		TypedQuery<Match> query = entityManager.createQuery(jpql, Match.class);
		EntityGraph<Match> graph = entityManager.createEntityGraph(Match.class);
		graph.addSubgraph("clubHome").addAttributeNodes("stadium", "country");
		graph.addSubgraph("clubAway").addAttributeNodes("stadium", "country");
		query.setHint("javax.persistence.fetchgraph", graph);
		query.setParameter("clubs", clubs);
		query.getResultList();
	}

}
