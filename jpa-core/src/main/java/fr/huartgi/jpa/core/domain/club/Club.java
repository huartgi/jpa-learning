package fr.huartgi.jpa.core.domain.club;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.apache.commons.lang.builder.ToStringBuilder;
import org.apache.commons.lang.builder.ToStringStyle;

import fr.huartgi.jpa.core.domain.league.Match;
import fr.huartgi.jpa.core.domain.league.Season;

@Entity
@Table(name="CLUB")
public class Club {
	
	// ========== ATTRIBUTES ==========
	
	@Id
	@Column(name="ID", unique=true, nullable=false)
	@GeneratedValue
	private Long id;
	
	@Column(name="NAME", unique=true, nullable=false)
	private String name;
	
	@ManyToOne
	@JoinColumn(name="FK_COUNTRY", nullable=false)
	private Country country;
	
	@ManyToOne
	@JoinColumn(name="FK_STADIUM", nullable=false)
	private Stadium stadium;
	
	@OneToMany(mappedBy="club", cascade = CascadeType.ALL)
	private List<Player> players;
	
	@OneToMany(mappedBy="winner", cascade = CascadeType.ALL)
	private List<Season> palmares;
	
	@OneToMany(mappedBy="clubHome", cascade = CascadeType.ALL)
	private List<Match> matchesHome;
	
	@OneToMany(mappedBy="clubAway", cascade = CascadeType.ALL)
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
