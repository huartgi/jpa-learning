package fr.huartgi.jpalearning.bags.test8.dao8;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.ClubDao;
import fr.huartgi.jpalearning.core.domain.Club;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityGraph;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class ClubDao8 extends GenericDao<Long, Club> implements ClubDao {
	
	public ClubDao8() {
		super(Club.class);
	}

	@Override
	public List<Club> findAll() {
		
		String jpql = "select club "
				+ "from Club club ";
		
		EntityGraph<Club> graph = entityManager.createEntityGraph(Club.class);
		graph.addAttributeNodes("stadium", "players", "matchesHome", "matchesAway");

		TypedQuery<Club> query = entityManager.createQuery(jpql, Club.class);
		query.setHint("javax.persistence.fetchgraph", graph);
		return query.getResultList();
	}

}
