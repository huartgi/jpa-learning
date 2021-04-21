package fr.huartgi.jpalearning.bags.test9.dao9;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.StadiumDao;
import fr.huartgi.jpalearning.core.domain.Stadium;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class StadiumDao9 extends GenericDao<Long, Stadium> implements StadiumDao {
	
	public StadiumDao9() {
		super(Stadium.class);
	}

	@Override
	public List<Stadium> findAll() {
		
		String jpql = "select stadium from Stadium stadium ";
		
		TypedQuery<Stadium> query = entityManager.createQuery(jpql, Stadium.class);
		return query.getResultList();
	}

}
