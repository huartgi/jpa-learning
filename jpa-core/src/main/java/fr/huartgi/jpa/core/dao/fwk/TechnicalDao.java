package fr.huartgi.jpa.core.dao.fwk;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

@Named
@Transactional
public class TechnicalDao {

    @PersistenceContext(unitName = "jpaLearningPu")
    protected EntityManager entityManager;
    
    public void clearTables() {
    	entityManager.createNativeQuery("delete from MATCHS").executeUpdate();
    	entityManager.createNativeQuery("delete from PLAYER").executeUpdate();
    	entityManager.createNativeQuery("delete from CLUB").executeUpdate();
    	entityManager.createNativeQuery("delete from STADIUM").executeUpdate();
    	entityManager.createNativeQuery("delete from COUNTRY").executeUpdate();
    }

}
