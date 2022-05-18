package fr.huartgi.jpalearning.core.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="PLAYER")
public class Player {
	
	// ========== ATTRIBUTES ==========
	
	@Id
	@Column(name="ID", unique=true, nullable=false)
	@GeneratedValue
	private Long id;
	
	@Column(name="NAME", length=50, nullable=false)
	private String name;
	
	@ManyToOne
	@JoinColumn(name="FK_COUNTRY", nullable=false)
	private Country country;
	
	@ManyToOne
	@JoinColumn(name="FK_CLUB", nullable=false)
	@JsonBackReference
	private Club club;
	
	@Temporal(TemporalType.DATE)
	@Column(name="BIRTHDATE")
	private Date birthdate;
	
	// ========== CONSTRUCTORS ==========
	
	public Player() {
	}
	
	public Player(String name, Country country, Club club) {
		this.name = name;
		this.country = country;
		this.club = club;
	}
	
	// ========== Object ==========
	
	@Override
	public String toString() {
		ToStringBuilder builder = new ToStringBuilder(this, ToStringStyle.SIMPLE_STYLE);
		builder.append("name", name);
		builder.append("country", country);
		builder.append("birthdate", birthdate);
		builder.append("club", club);
		return builder.toString();
	}	
	
	@PreUpdate
	public void updateBirthdate() {
		birthdate = new Date();
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
	public Country getCountry() {
		return country;
	}
	public void setCountry(Country country) {
		this.country = country;
	}
	public Club getClub() {
		return club;
	}
	public void setClub(Club club) {
		this.club = club;
	}
	public Date getBirthdate() {
		return birthdate;
	}
	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}
	
}
