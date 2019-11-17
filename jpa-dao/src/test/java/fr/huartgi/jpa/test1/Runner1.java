package fr.huartgi.jpa.test1;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Runner1 {

	public static String CONFIG_FILE = "spring/test1/spring-config-1.xml";

	public static void main(String[] args) {

		System.out.println("Config file: " + CONFIG_FILE);

		ApplicationContext context = new ClassPathXmlApplicationContext(CONFIG_FILE);

		Tester1 tester1 = (Tester1) context.getBean("tester1");
		tester1.testQueries();

		((ConfigurableApplicationContext) context).close();
	}

}
