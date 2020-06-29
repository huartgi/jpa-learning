package fr.huartgi.jpalearning.test9;

import fr.huartgi.jpalearning.test1.Tester1;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.core.env.AbstractEnvironment;

@SpringBootApplication(scanBasePackages = {"fr.huartgi.jpalearning.core", "fr.huartgi.jpalearning.test9"})
@EntityScan(basePackages = "fr.huartgi.jpalearning.core.domain")
public class Runner9 {

    public static void main(String[] args) {
        System.setProperty(AbstractEnvironment.ACTIVE_PROFILES_PROPERTY_NAME, "cache");
        ApplicationContext context = SpringApplication.run(Runner9.class, args);
        Tester9 tester = (Tester9) context.getBean("tester9");
        tester.testQueries();
        SpringApplication.exit(context);
    }

}
