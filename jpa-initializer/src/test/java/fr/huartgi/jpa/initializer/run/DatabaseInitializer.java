package fr.huartgi.jpa.initializer.run;

import javax.inject.Inject;
import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.huartgi.jpa.core.dao.fwk.TechnicalDao;
import fr.huartgi.jpa.initializer.importer.ClubImporter;
import fr.huartgi.jpa.initializer.importer.CountryImporter;
import fr.huartgi.jpa.initializer.importer.MatchCreater;

@Named
public class DatabaseInitializer {

	private static final Logger logger = LoggerFactory.getLogger(DatabaseInitializer.class);

	@Inject
	private TechnicalDao technicalDao;
	@Inject
	private CountryImporter countryImporter;
	@Inject
	private ClubImporter clubImporter;
	@Inject
	private MatchCreater matchCreater;
	
	
	public void initDatabase() {
		logger.debug("Clearing table");
		technicalDao.clearTables();

		logger.debug("Importing countries");
		countryImporter.importCountries();
		
		logger.debug("Importing clubs & faking players");
		clubImporter.importClubs();
		
		logger.debug("Faking matches");
		matchCreater.createMatchs();
	}


}
