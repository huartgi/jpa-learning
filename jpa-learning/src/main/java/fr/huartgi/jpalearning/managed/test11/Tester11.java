package fr.huartgi.jpalearning.managed.test11;

import fr.huartgi.jpalearning.core.common.TechnicalDao;
import fr.huartgi.jpalearning.core.domain.*;
import fr.huartgi.jpalearning.core.service.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Tester11 {

    private static final Logger logger = LoggerFactory.getLogger(Tester11.class);

    @Autowired
    private ClubService clubService;
    @Autowired
    private CountryService countryService;
    @Autowired
    private StadiumService stadiumService;

    @Autowired
    private TechnicalDao technicalDao;


    /**
     * This 1st test is creating a club
     */
    public void testQueries() {

        technicalDao.triggerSchemaGeneration();

        logger.debug("\n\n\n");

        Country italy = countryService.findByCode("ITA");

        Stadium sanSiro = new Stadium("San Siro", 75000);
        stadiumService.create(sanSiro);

//        Club inter = new Club("Inter Milan", italy, sanSiro);
//        clubService.create(inter);
    }
}
