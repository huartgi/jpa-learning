package fr.huartgi.jpa.club.importer;

import javax.inject.Inject;
import javax.inject.Named;

import fr.huartgi.jpa.core.dao.fwk.TechnicalDao;

@Named
public class JpaInitializer {

	@Inject
	private TechnicalDao technicalDao;
	@Inject
	private CountryImporter countryImporter;
	@Inject
	private ClubImporter clubImporter;
	@Inject
	private MatchCreater matchCreater;
	
	
	public void initDatabase() {
		technicalDao.clearTables();
		countryImporter.importCountries();
		clubImporter.importClubs();
		matchCreater.createMatchs();
	}


}
