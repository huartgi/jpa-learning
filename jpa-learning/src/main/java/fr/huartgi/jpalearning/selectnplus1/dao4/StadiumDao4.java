package fr.huartgi.jpalearning.selectnplus1.dao4;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.StadiumDao;
import fr.huartgi.jpalearning.core.domain.Stadium;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import java.util.List;

@Repository
@Profile("dao4")
public class StadiumDao4 extends GenericDao<Long, Stadium> implements StadiumDao {
	
	public StadiumDao4() {
		super(Stadium.class);
	}

	@Override
	public List<Stadium> findAll() {
		
		String jpql = "select stadium from Stadium stadium ";
		
		TypedQuery<Stadium> query = entityManager.createQuery(jpql, Stadium.class);
		return query.getResultList();
	}

}