package fr.huartgi.jpalearning.bags.dao8;

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
@Profile("dao8")
public class ClubDao8 extends GenericDao<Integer, Club> implements ClubDao {

	public ClubDao8() {
		super(Club.class);
	}

	@Override
	public List<Club> findAll() {

		String jpql = "select club "
				+ "from Club club ";

		EntityGraph<Club> graph = entityManager.createEntityGraph(Club.class);
		graph.addAttributeNodes("stadium", "players", "matchesHome", "matchesAway");

		TypedQuery<Club> query = entityManager.createQuery(jpql, Club.class);
		query.setHint("javax.persistence.fetchgraph", graph);
		return query.getResultList();
	}

	@Override
	public List<Club> findByIds(Integer... ids) {
		String jpql = "select club from Club club where club.id in :ids";
		TypedQuery<Club> query = entityManager.createQuery(jpql, Club.class);
		query.setParameter("ids", Arrays.asList(ids));
		return query.getResultList();
	}

}
