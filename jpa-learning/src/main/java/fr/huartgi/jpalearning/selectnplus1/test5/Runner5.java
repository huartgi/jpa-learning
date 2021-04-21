package fr.huartgi.jpalearning.selectnplus1.test5;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.core.env.AbstractEnvironment;

@SpringBootApplication(scanBasePackages = {"fr.huartgi.jpalearning.core", "fr.huartgi.jpalearning.selectnplus1.test5"})
@EntityScan(basePackages = "fr.huartgi.jpalearning.core.domain")
public class Runner5 {

    public static void main(String[] args) {
        System.setProperty(AbstractEnvironment.ACTIVE_PROFILES_PROPERTY_NAME, "cache");
        ApplicationContext context = SpringApplication.run(Runner5.class, args);
        Tester5 tester = (Tester5) context.getBean("tester5");
        tester.testQueries();
        SpringApplication.exit(context);
    }

}
