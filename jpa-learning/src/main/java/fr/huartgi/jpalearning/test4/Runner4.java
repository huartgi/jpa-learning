package fr.huartgi.jpalearning.test4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.core.env.AbstractEnvironment;

@SpringBootApplication(scanBasePackages = {"fr.huartgi.jpalearning.core", "fr.huartgi.jpalearning.test4"})
@EntityScan(basePackages = "fr.huartgi.jpalearning.core.domain")
public class Runner4 {

    public static void main(String[] args) {
        System.setProperty(AbstractEnvironment.ACTIVE_PROFILES_PROPERTY_NAME, "cache");
        ApplicationContext context = SpringApplication.run(Runner4.class, args);
        Tester4 tester = (Tester4) context.getBean("tester4");
        tester.testQueries();
    }

}
