package fr.huartgi.jpalearning.selectnplus1.test1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;

@SpringBootApplication(scanBasePackages = {"fr.huartgi.jpalearning.core", "fr.huartgi.jpalearning.selectnplus1.test1"})
@EntityScan(basePackages = "fr.huartgi.jpalearning.core.domain")
public class Runner1 {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(Runner1.class, args);
        Tester1 tester = (Tester1) context.getBean("tester1");
        tester.testQueries();
        SpringApplication.exit(context);
    }

}
