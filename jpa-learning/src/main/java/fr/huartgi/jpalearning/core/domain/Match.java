package fr.huartgi.jpalearning.core.domain;

import javax.persistence.*;

@Entity
@Table(name="MATCHS")
public class Match {
	
	// ========== ATTRIBUTES ==========
	
	@Id
	@Column(name="ID", unique=true, nullable=false)
	@GeneratedValue
	private Long id;
	
	@ManyToOne
	@JoinColumn(name="FK_CLUB_HOME", nullable=false)
	private Club clubHome;
	
	@Column(name="GOAL_HOME")
	private Integer goalHome;
	
	@ManyToOne
	@JoinColumn(name="FK_CLUB_AWAY", nullable=false)
	private Club clubAway;
	
	@Column(name="GOAL_AWAY")
	private Integer goalAway;

	// ========== CONSTRUCTORS ==========
	
	public Match() {
	}


	public Match(Club clubHome, Integer goalHome, Club clubAway, Integer goalAway) {
		super();
		this.clubHome = clubHome;
		this.goalHome = goalHome;
		this.clubAway = clubAway;
		this.goalAway = goalAway;
	}
	
	// ========== METHODS ==========
	
	@Override
	public String toString() {
		return clubHome.getName() + " " + goalHome + " - " + goalAway + " " + clubAway.getName();
	}
	
	
	// ========== GETTERS & SETTERS ==========

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Club getClubHome() {
		return clubHome;
	}

	public void setClubHome(Club clubHome) {
		this.clubHome = clubHome;
	}

	public Integer getGoalHome() {
		return goalHome;
	}

	public void setGoalHome(Integer goalHome) {
		this.goalHome = goalHome;
	}

	public Club getClubAway() {
		return clubAway;
	}

	public void setClubAway(Club clubAway) {
		this.clubAway = clubAway;
	}

	public Integer getGoalAway() {
		return goalAway;
	}

	public void setGoalAway(Integer goalAway) {
		this.goalAway = goalAway;
	}

}
