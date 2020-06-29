package fr.huartgi.jpalearning.test7.dao7;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.ClubDao;
import fr.huartgi.jpalearning.core.domain.Club;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityGraph;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class ClubDao7 extends GenericDao<Long, Club> implements ClubDao {
	
	public ClubDao7() {
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
