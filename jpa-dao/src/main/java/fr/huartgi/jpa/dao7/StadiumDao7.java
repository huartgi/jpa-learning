package fr.huartgi.jpa.dao7;

import java.util.List;

import javax.inject.Named;
import javax.persistence.TypedQuery;

import fr.huartgi.jpa.core.dao.club.StadiumDao;
import fr.huartgi.jpa.core.dao.fwk.GenericDao;
import fr.huartgi.jpa.core.domain.Stadium;

@Named
public class StadiumDao7 extends GenericDao<Long, Stadium> implements StadiumDao {
	
	public StadiumDao7() {
		super(Stadium.class);
	}

	@Override
	public List<Stadium> findAll() {
		
		String jpql = "select stadium from Stadium stadium ";
		
		TypedQuery<Stadium> query = entityManager.createQuery(jpql, Stadium.class);
		return query.getResultList();
	}

}
