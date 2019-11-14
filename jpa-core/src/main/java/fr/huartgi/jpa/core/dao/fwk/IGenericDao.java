package fr.huartgi.jpa.core.dao.fwk;

public interface IGenericDao<ID, E> {

	public E findById(ID id);

	public void create(E entity);

	public E update(E entity);

	public void remove(E entity);

}
