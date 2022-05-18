package fr.huartgi.jpalearning.core.dao.impl;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.ClubDao;
import fr.huartgi.jpalearning.core.domain.Club;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityGraph;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
@Profile("local")
public class ClubDaoImpl extends GenericDao<Long, Club> implements ClubDao {
	
	public ClubDaoImpl() {
		super(Club.class);
	}

	@Override
	public List<Club> findAll() {
		
		String jpql = "select club "
				+ "from Club club ";
		
		EntityGraph<Club> graph = entityManager.createEntityGraph(Club.class);

		TypedQuery<Club> query = entityManager.createQuery(jpql, Club.class);
		query.setHint("javax.persistence.fetchgraph", graph);
		List<Club> clubs = null;
		try {
			clubs = query.getResultList();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return clubs;
	}

}
