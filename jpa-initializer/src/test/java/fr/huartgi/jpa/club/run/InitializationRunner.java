package fr.huartgi.jpa.club.run;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class InitializationRunner {

	public static void main(String[] args) {

		ApplicationContext context = new ClassPathXmlApplicationContext("spring/spring-config.xml");      
		
		DatabaseInitializer jpaInitializer = (DatabaseInitializer) context.getBean("jpaInitializer");
		jpaInitializer.initDatabase();
		
		((ConfigurableApplicationContext) context).close();
	}

}
