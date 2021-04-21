package fr.huartgi.jpalearning.selectnplus1.test6.dao6;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.ClubDao;
import fr.huartgi.jpalearning.core.domain.Club;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityGraph;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class ClubDao6 extends GenericDao<Long, Club> implements ClubDao {
	
	public ClubDao6() {
		super(Club.class);
	}

	@Override
	public List<Club> findAll() {
		
		String jpql = "select club "
				+ "from Club club ";
		
		EntityGraph<Club> graph = entityManager.createEntityGraph(Club.class);
		graph.addAttributeNodes("stadium");

		TypedQuery<Club> query = entityManager.createQuery(jpql, Club.class);
		query.setHint("javax.persistence.loadgraph", graph);
		List<Club> clubs = null;
		try {
			clubs = query.getResultList();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return clubs;
	}

}
