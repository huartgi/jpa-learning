package fr.huartgi.jpalearning.managed.test11.dao;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.ClubDao;
import fr.huartgi.jpalearning.core.domain.Club;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import java.util.List;

@Repository
@Profile("Test11")
public class ClubDao11 extends GenericDao<Long, Club> implements ClubDao {
	
	public ClubDao11() {
		super(Club.class);
	}

	@Override
	public List<Club> findAll() {
		
		String jpql = "select club from Club club ";
		
		TypedQuery<Club> query = entityManager.createQuery(jpql, Club.class);
		return query.getResultList();
		
	}

}
