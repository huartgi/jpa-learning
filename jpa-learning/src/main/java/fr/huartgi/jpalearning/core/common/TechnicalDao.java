package fr.huartgi.jpalearning.core.common;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
@Transactional
public class TechnicalDao {

    @PersistenceContext
    protected EntityManager entityManager;
    
    public void triggerSchemaGeneration() {
    	entityManager.createNativeQuery("select 1 from dual").getSingleResult();
    }

    public EntityManager getEntityManager() {
        return entityManager;
    }

}
