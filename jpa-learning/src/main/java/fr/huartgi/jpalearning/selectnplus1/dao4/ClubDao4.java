package fr.huartgi.jpalearning.selectnplus1.dao4;

import fr.huartgi.jpalearning.core.common.GenericDao;
import fr.huartgi.jpalearning.core.dao.ClubDao;
import fr.huartgi.jpalearning.core.domain.Club;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityGraph;
import javax.persistence.TypedQuery;
import java.util.Arrays;
import java.util.List;

@Repository
@Profile("dao4")
public class ClubDao4 extends GenericDao<Integer, Club> implements ClubDao {

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

	@Override
	public List<Club> findByIds(Integer... ids) {
		String jpql = "select club "
				+ "from Club club "
				+ "join fetch club.stadium "
				+ "where club.id in :ids";

		TypedQuery<Club> query = entityManager.createQuery(jpql, Club.class);
		query.setParameter("ids", Arrays.asList(ids));

		return query.getResultList();
	}

}
