package fr.huartgi.jpalearning.selectnplus1.test6.dao6;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.PlayerDao;
import fr.huartgi.jpalearning.core.domain.Club;
import fr.huartgi.jpalearning.core.domain.Player;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityGraph;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class PlayerDao6 extends GenericDao<Long, Player> implements PlayerDao {
	
	public PlayerDao6() {
		super(Player.class);
	}

	@Override
	public List<Player> findAll() {
		
		String jpql = "select player from Player player ";
		
		EntityGraph<Player> graph = entityManager.createEntityGraph(Player.class);
		graph.addSubgraph("club").addAttributeNodes("stadium");

		TypedQuery<Player> query = entityManager.createQuery(jpql, Player.class);
		query.setHint("javax.persistence.loadgraph", graph);
		return query.getResultList();
		
	}

	@Override
	public List<Player> findByClub(Club club) {
		
		String jpql = "select player from Player player where player.club = :club ";
		
		TypedQuery<Player> query = entityManager.createQuery(jpql, Player.class);
		query.setParameter("club", club);
		return query.getResultList();
		
	}

	@Override
	public List<Player> findByClub(Long id) {
		
		String jpql = "select player from Player player where player.club.id = :id ";
		
		TypedQuery<Player> query = entityManager.createQuery(jpql, Player.class);
		query.setParameter("id", id);
		return query.getResultList();
	}

}
