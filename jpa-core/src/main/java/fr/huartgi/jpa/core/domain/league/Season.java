package fr.huartgi.jpa.core.domain.league;

import java.util.List;

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

import fr.huartgi.jpa.core.domain.club.Club;

@Entity
@Table(name = "SEASON")
public class Season {

	// ========== ATTRIBUTES ==========

	@Id
	@Column(name = "ID", unique = true, nullable = false)
	@GeneratedValue
	private Long id;

	@ManyToOne
	@JoinColumn(name = "FK_COMPETITION", nullable = false)
	private Competition competition;

	@Column(name = "YEAR", nullable = false)
	private Integer year;

	@ManyToOne
	@JoinColumn(name = "FK_CLUB_WINNER")
	private Club winner;

	@OneToMany
	private List<Match> matchs;

	// ========== CONSTRUCTORS ==========

	public Season() {
	}

	public Season(Competition competition, Integer year) {
		super();
		this.competition = competition;
		this.year = year;
	}

	// ========== METHODS ==========

	@Override
	public String toString() {
		ToStringBuilder builder = new ToStringBuilder(this, ToStringStyle.SIMPLE_STYLE);
		builder.append("competition", competition);
		builder.append("year", year);
		builder.append("winner", winner);
		return builder.toString();
	}

	// ========== GETTERS & SETTERS ==========

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public List<Match> getMatchs() {
		return matchs;
	}

	public void setMatchs(List<Match> matchs) {
		this.matchs = matchs;
	}

	public Competition getCompetition() {
		return competition;
	}

	public void setCompetition(Competition competition) {
		this.competition = competition;
	}

	public Club getWinner() {
		return winner;
	}

	public void setWinner(Club winner) {
		this.winner = winner;
	}
}
