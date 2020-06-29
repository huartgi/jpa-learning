package fr.huartgi.jpalearning.test10;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.core.env.AbstractEnvironment;

@SpringBootApplication(scanBasePackages = {"fr.huartgi.jpalearning.core", "fr.huartgi.jpalearning.test10"})
@EntityScan(basePackages = "fr.huartgi.jpalearning.core.domain")
public class Runner10 {

    public static void main(String[] args) {
        System.setProperty(AbstractEnvironment.ACTIVE_PROFILES_PROPERTY_NAME, "cache");
        ApplicationContext context = SpringApplication.run(Runner10.class, args);
        Tester10 tester = (Tester10) context.getBean("tester10");
        tester.testQueries();
        SpringApplication.exit(context);
    }

}
