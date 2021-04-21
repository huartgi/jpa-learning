package fr.huartgi.jpalearning.managed.test11;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;

@SpringBootApplication(scanBasePackages = {"fr.huartgi.jpalearning.core", "fr.huartgi.jpalearning.managed.test11"})
@EntityScan(basePackages = "fr.huartgi.jpalearning.core.domain")
public class Runner11 {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(Runner11.class, args);
        Tester11 tester = (Tester11) context.getBean("tester11");
        tester.testQueries();
        SpringApplication.exit(context);
    }

}
