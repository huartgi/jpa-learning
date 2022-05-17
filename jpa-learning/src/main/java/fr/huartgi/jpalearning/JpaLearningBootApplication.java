package fr.huartgi.jpalearning;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
@EntityScan(basePackages = {
        "fr.huartgi.jpalearning.core.domain"
})
public class JpaLearningBootApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder aSpringApplicationBuilder) {
        return aSpringApplicationBuilder.sources(JpaLearningBootApplication.class);
    }



}
