package fr.huartgi.jpa.initializer.run;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class InitializationRunner {

	public static String CONFIG_FILE = "spring/test1/spring-config-1.xml";

	public static void main(String[] args) {

		System.out.println("Config file: " + CONFIG_FILE);

		ApplicationContext context = new ClassPathXmlApplicationContext(CONFIG_FILE);

		DatabaseInitializer databaseInitializer = (DatabaseInitializer) context.getBean("databaseInitializer");
		databaseInitializer.initDatabase();
		
		((ConfigurableApplicationContext) context).close();
	}

}
