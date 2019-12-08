package fr.huartgi.jpa.dao4;

import java.util.List;

import javax.inject.Named;
import javax.persistence.TypedQuery;

import fr.huartgi.jpa.core.dao.club.StadiumDao;
import fr.huartgi.jpa.core.dao.fwk.GenericDao;
import fr.huartgi.jpa.core.domain.club.Stadium;

@Named
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
