package fr.huartgi.jpalearning.test6;

import fr.huartgi.jpalearning.test1.Tester1;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.core.env.AbstractEnvironment;

@SpringBootApplication(scanBasePackages = {"fr.huartgi.jpalearning.core", "fr.huartgi.jpalearning.test6"})
@EntityScan(basePackages = "fr.huartgi.jpalearning.core.domain")
public class Runner6 {

    public static void main(String[] args) {
        System.setProperty(AbstractEnvironment.ACTIVE_PROFILES_PROPERTY_NAME, "cache");
        ApplicationContext context = SpringApplication.run(Runner6.class, args);
        Tester1 tester = (Tester1) context.getBean("tester1");
        tester.testQueries();
//        SpringApplication.exit(context);
    }

}
