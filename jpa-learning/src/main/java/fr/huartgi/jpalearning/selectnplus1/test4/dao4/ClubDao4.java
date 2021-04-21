package fr.huartgi.jpalearning.selectnplus1.test4.dao4;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.ClubDao;
import fr.huartgi.jpalearning.core.domain.Club;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class ClubDao4 extends GenericDao<Long, Club> implements ClubDao {
	
	public ClubDao4() {
		super(Club.class);
	}

	@Override
	public List<Club> findAll() {
		
		String jpql = "select club "
				+ "from Club club "
				+ "join fetch club.stadium ";
		
		TypedQuery<Club> query = entityManager.createQuery(jpql, Club.class);
		return query.getResultList();
		
	}

}
