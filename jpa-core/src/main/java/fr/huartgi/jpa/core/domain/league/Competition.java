package fr.huartgi.jpa.core.domain.league;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.apache.commons.lang.builder.ToStringBuilder;
import org.apache.commons.lang.builder.ToStringStyle;

@Entity
@Table(name="COMPETITION")
public class Competition {
	
	// ========== ATTRIBUTES ==========
	
	@Id
	@Column(name="ID", unique=true, nullable=false)
	@GeneratedValue
	private Long id;
	
	@Column(name="NAME", nullable=false)
	private String name;

	@OneToMany(mappedBy="competition")
	private List<Season> seasons;
	
	// ========== CONSTRUCTORS ==========
	
	public Competition() {
	}


	public Competition(String name) {
		super();
		this.name = name;
	}
	
	// ========== METHODS ==========
	
	@Override
	public String toString() {
		ToStringBuilder builder = new ToStringBuilder(this, ToStringStyle.SIMPLE_STYLE);
		builder.append("name", name);
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

}
