package fr.huartgi.jpa.dao2.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Runner2 {

	public static String CONFIG_FILE = "spring/test2/spring-config-2.xml";

	public static void main(String[] args) {

		System.out.println("Config file: " + CONFIG_FILE);

		ApplicationContext context = new ClassPathXmlApplicationContext(CONFIG_FILE);

		Tester2 tester2 = (Tester2) context.getBean("tester2");
		tester2.testQueries();

		((ConfigurableApplicationContext) context).close();
	}

}
