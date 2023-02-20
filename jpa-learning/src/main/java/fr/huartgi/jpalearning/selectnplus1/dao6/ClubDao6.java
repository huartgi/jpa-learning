package fr.huartgi.jpalearning.selectnplus1.dao6;

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
@Profile("dao6")
public class ClubDao6 extends GenericDao<Integer, Club> implements ClubDao {

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

	@Override
	public List<Club> findByIds(Integer... ids) {
		String jpql = "select club from Club club where club.id in :ids";

		EntityGraph<Club> graph = entityManager.createEntityGraph(Club.class);

		TypedQuery<Club> query = entityManager.createQuery(jpql, Club.class);
		query.setHint("javax.persistence.fetchgraph", graph);
		query.setParameter("ids", Arrays.asList(ids));

		return query.getResultList();
	}

}
