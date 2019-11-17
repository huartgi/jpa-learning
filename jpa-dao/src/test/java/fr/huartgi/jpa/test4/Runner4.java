package fr.huartgi.jpa.test4;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Runner4 {

	public static String CONFIG_FILE = "spring/test4/spring-config-4.xml";

	public static void main(String[] args) {

		System.out.println("Config file: " + CONFIG_FILE);

		ApplicationContext context = new ClassPathXmlApplicationContext(CONFIG_FILE);

		Tester4 tester4 = (Tester4) context.getBean("tester4");
		tester4.testQueries();

		((ConfigurableApplicationContext) context).close();
	}

}
