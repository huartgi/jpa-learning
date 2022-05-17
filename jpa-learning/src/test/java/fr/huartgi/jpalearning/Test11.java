package fr.huartgi.jpalearning;


import fr.huartgi.jpalearning.core.domain.Country;
import fr.huartgi.jpalearning.core.domain.Stadium;
import fr.huartgi.jpalearning.core.service.ClubService;
import fr.huartgi.jpalearning.core.service.CountryService;
import fr.huartgi.jpalearning.core.service.StadiumService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest(classes = {JpaLearningBootApplication.class})
@ActiveProfiles(profiles = {"Test11","cache"})
@Slf4j
public class Test11 {


    @Autowired
    private ClubService clubService;
    @Autowired
    private CountryService countryService;
    @Autowired
    private StadiumService stadiumService;


    /**
     * This 1st test is creating a club
     */
    @Test
    public void testQueries() {

        Country italy = countryService.findByCode("ITA");

        Stadium sanSiro = new Stadium("San Siro", 75000);
        stadiumService.create(sanSiro);

//        Club inter = new Club("Inter Milan", italy, sanSiro);
//        clubService.create(inter);
    }

}
