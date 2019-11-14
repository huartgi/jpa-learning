package fr.huartgi.jpa.club.importer;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class InitializationRunner {

	public static void main(String[] args) {

		ApplicationContext context = new ClassPathXmlApplicationContext("spring/spring-config.xml");      
		
		JpaInitializer jpaInitializer = (JpaInitializer) context.getBean("jpaInitializer");
		jpaInitializer.initDatabase();
		
		((ConfigurableApplicationContext) context).close();
	}

}
