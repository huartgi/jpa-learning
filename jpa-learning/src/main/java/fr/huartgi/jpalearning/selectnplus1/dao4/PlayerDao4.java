package fr.huartgi.jpalearning.selectnplus1.dao4;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.PlayerDao;
import fr.huartgi.jpalearning.core.domain.Club;
import fr.huartgi.jpalearning.core.domain.Player;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import java.util.List;

@Repository
@Profile("dao4")
public class PlayerDao4 extends GenericDao<Long, Player> implements PlayerDao {
	
	public PlayerDao4() {
		super(Player.class);
	}

	@Override
	public List<Player> findAll() {
		
		String jpql = "select player "
				+ "from Player player "
				+ "join fetch player.club club "
				+ "join fetch club.stadium ";
		
		TypedQuery<Player> query = entityManager.createQuery(jpql, Player.class);
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
