package fr.huartgi.jpalearning.selectnplus1.test2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.core.env.AbstractEnvironment;

@SpringBootApplication(scanBasePackages = {"fr.huartgi.jpalearning.core", "fr.huartgi.jpalearning.selectnplus1.test1", "fr.huartgi.jpalearning.selectnplus1.test2"})
@EntityScan(basePackages = "fr.huartgi.jpalearning.core.domain")
public class Runner2 {

    public static void main(String[] args) {
        System.setProperty(AbstractEnvironment.ACTIVE_PROFILES_PROPERTY_NAME, "cache");
        ApplicationContext context = SpringApplication.run(Runner2.class, args);
        Tester2 tester = (Tester2) context.getBean("tester2");
        tester.testQueries();
        SpringApplication.exit(context);
    }

}
