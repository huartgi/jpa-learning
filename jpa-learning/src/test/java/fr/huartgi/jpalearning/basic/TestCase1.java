package fr.huartgi.jpalearning.basic;

import fr.huartgi.jpalearning.JpaLearningBootApplication;
import fr.huartgi.jpalearning.core.service.ClubService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest(classes = {JpaLearningBootApplication.class})
@ActiveProfiles("dao1")
@RequiredArgsConstructor
@Slf4j
class TestCase1 {

    private final ClubService clubService;

    /**
     * Project context : bad JPA mapping with every relationships marked as EAGER !
     * <p>
     * In this scenario : we execute the following queries :
     * - load the clubs 1 and 2
     */
    @Test
    void testQueries() {

        clubService.findByIds(1, 2);
    }
}
