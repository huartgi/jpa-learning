package fr.huartgi.jpa.core.domain.club;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.apache.commons.lang.builder.ToStringBuilder;
import org.apache.commons.lang.builder.ToStringStyle;

@Entity
@Table(name="STADIUM")
public class Stadium {
	
	// ========== ATTRIBUTES ==========
	
	@Id
	@Column(name="ID", unique=true, nullable=false)
	@GeneratedValue
	private Long id;
	
	@Column(name="NAME")
	private String name;
	
	@Column(name="CAPACITY")
	private Integer capacity;
	
	// ========== CONSTRUCTORS ==========
	
	public Stadium() {
	}
	
	public Stadium(String name, Integer capacity) {
		this.name = name;
		this.capacity = capacity;
	}
	
	// ========== Object ==========
	
	@Override
	public String toString() {
		ToStringBuilder builder = new ToStringBuilder(this, ToStringStyle.SIMPLE_STYLE);
		builder.append("name", name);
		builder.append("capacity", capacity);
		return builder.toString();
	}	
	
	// ========== GETTERS & SETTERS ==========

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getCapacity() {
		return capacity;
	}
	public void setCapacity(Integer capacity) {
		this.capacity = capacity;
	}
	
}
