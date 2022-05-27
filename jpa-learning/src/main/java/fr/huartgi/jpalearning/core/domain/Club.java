package fr.huartgi.jpalearning.core.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="CLUB")
public class Club {

	@Id
	@Column(name = "ID")
	@GeneratedValue
	private Integer id;
	
	@Column(name="NAME")
	private String name;
	
	@ManyToOne
	@JoinColumn(name="FK_COUNTRY")
	private Country country;
	
	@ManyToOne
	@JoinColumn(name="FK_STADIUM")
	private Stadium stadium;

	@OneToMany(mappedBy = "club")
	@JsonManagedReference
	private List<Player> players;

	@OneToMany(mappedBy = "clubHome")
	@JsonManagedReference
	private List<Match> matchesHome;

	@OneToMany(mappedBy = "clubAway")
	@JsonManagedReference
	private List<Match> matchesAway;
	
	
	
	// ========== CONSTRUCTORS ==========
	
	public Club() {
	}
	
	public Club(String name, Country country, Stadium stadium) {
		this.name = name;
		this.country = country;
		this.stadium = stadium;
	}
	
	// ========== Object ==========
	
	@Override
	public String toString() {
		ToStringBuilder builder = new ToStringBuilder(this, ToStringStyle.SIMPLE_STYLE);
		builder.append("name", name);
		builder.append("country", country);
		builder.append("stadium", stadium);
		return builder.toString();
	}	
	
	// ========== GETTERS & SETTERS ==========

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
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

	public Stadium getStadium() {
		return stadium;
	}

	public void setStadium(Stadium stadium) {
		this.stadium = stadium;
	}

	public List<Player> getPlayers() {
		return players;
	}

	public void setPlayers(List<Player> players) {
		this.players = players;
	}

	public List<Match> getMatchesHome() {
		return matchesHome;
	}

	public void setMatchesHome(List<Match> matchesHome) {
		this.matchesHome = matchesHome;
	}

	public List<Match> getMatchesAway() {
		return matchesAway;
	}

	public void setMatchesAway(List<Match> matchesAway) {
		this.matchesAway = matchesAway;
	}

}
