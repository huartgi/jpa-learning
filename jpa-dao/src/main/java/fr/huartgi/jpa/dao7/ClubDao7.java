package fr.huartgi.jpa.dao7;

import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityGraph;
import javax.persistence.TypedQuery;

import fr.huartgi.jpa.core.dao.club.ClubDao;
import fr.huartgi.jpa.core.dao.fwk.GenericDao;
import fr.huartgi.jpa.core.domain.club.Club;

@Named
public class ClubDao7 extends GenericDao<Long, Club> implements ClubDao {
	
	public ClubDao7() {
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

}
