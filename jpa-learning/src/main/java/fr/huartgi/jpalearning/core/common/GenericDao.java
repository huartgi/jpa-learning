package fr.huartgi.jpalearning.core.common;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TemporalType;
import java.util.Date;
import java.util.Map;

/**
 * Tout DAO de l'application doit h�riter du GenericDao. Le r�le du GenericDao est de : - fournir l'acc�s � l'EntityManager - offrir les m�thodes du CRUD (findById, create, update, delete) -> pas
 * besoin de les r��crire dans chaque Dao.
 * 
 * 
 * @author huartgi
 *
 * @param <ID>
 *            : le type de l'id de l'entit� � manipuler (ex: Long)
 * @param <E>
 *            : l'entit� manipul�e (ex: Contrat)
 */
public abstract class GenericDao<ID, E> {

    // ========== ATTRIBUTES ==========

    protected Class<E> entityClass;

    @PersistenceContext
    protected EntityManager entityManager;

    // ========== CONSTRUCTOR ==========

    public GenericDao(Class<E> entityClass) {
        this.entityClass = entityClass;
    }

    // ========== COMMON METHODS FOR ALL DAO ==========

    public E findById(ID id) {
        return entityManager.find(entityClass, id);
    }

    public void create(E entity) {
        entityManager.persist(entity);
        entityManager.flush();
    }

    public E update(E entity) {
        E mergedEntity = entityManager.merge(entity);
        entityManager.flush();
        return mergedEntity;
    }

    public void remove(E entity) {
        entity = entityManager.merge(entity);
        entityManager.remove(entity);
        entityManager.flush();
    }

    // ========== USEFUL METHODS ==========

    /**
     * Remplit les param�tres d'un Query � partir d'une Map
     * 
     * @param query
     * @param params
     */
    protected void fillParameters(Query query, Map<String, Object> params) {
        for (String key : params.keySet()) {
            Object value = params.get(key);
            if (value instanceof Date) {
                query.setParameter(key, (Date) value, TemporalType.DATE);
            } else {
                query.setParameter(key, value);
            }
        }
    }


    // ========== GETTER ==========

    public EntityManager getEntityManager() {
        return entityManager;
    }

}
