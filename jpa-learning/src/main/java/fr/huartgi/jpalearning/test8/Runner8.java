package fr.huartgi.jpalearning.test8;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.core.env.AbstractEnvironment;

@SpringBootApplication(scanBasePackages = {"fr.huartgi.jpalearning.core", "fr.huartgi.jpalearning.test8"})
@EntityScan(basePackages = "fr.huartgi.jpalearning.core.domain")
public class Runner8 {

    public static void main(String[] args) {
        System.setProperty(AbstractEnvironment.ACTIVE_PROFILES_PROPERTY_NAME, "cache");
        ApplicationContext context = SpringApplication.run(Runner8.class, args);
        Tester8 tester = (Tester8) context.getBean("tester8");
        tester.testQueries();
        SpringApplication.exit(context);
    }

}
