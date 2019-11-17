package fr.huartgi.jpa.test3;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Runner3 {

	public static String CONFIG_FILE = "spring/test3/spring-config-3.xml";

	public static void main(String[] args) {

		System.out.println("Config file: " + CONFIG_FILE);

		ApplicationContext context = new ClassPathXmlApplicationContext(CONFIG_FILE);

		Tester3 tester3 = (Tester3) context.getBean("tester3");
		tester3.testQueries();

		((ConfigurableApplicationContext) context).close();
	}

}
