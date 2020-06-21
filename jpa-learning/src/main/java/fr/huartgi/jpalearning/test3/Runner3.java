package fr.huartgi.jpalearning.test3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.core.env.AbstractEnvironment;

@SpringBootApplication(scanBasePackages = {"fr.huartgi.jpalearning.core", "fr.huartgi.jpalearning.test1", "fr.huartgi.jpalearning.test3"})
@EntityScan(basePackages = "fr.huartgi.jpalearning.core.domain")
public class Runner3 {

    public static void main(String[] args) {
        System.setProperty(AbstractEnvironment.ACTIVE_PROFILES_PROPERTY_NAME, "cache");
        ApplicationContext context = SpringApplication.run(Runner3.class, args);
        Tester3 tester = (Tester3) context.getBean("tester3");
        tester.testQueries();
    }

}
