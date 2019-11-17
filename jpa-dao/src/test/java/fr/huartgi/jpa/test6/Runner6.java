package fr.huartgi.jpa.test6;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Runner6 {

	private static int TEST_ID = 6;
	public static String CONFIG_FILE = "spring/test" + TEST_ID + "/spring-config-" + TEST_ID + ".xml";

	public static void main(String[] args) {

		System.out.println("Config file: " + CONFIG_FILE);

		ApplicationContext context = new ClassPathXmlApplicationContext(CONFIG_FILE);

		Tester6 tester = (Tester6) context.getBean("tester" + TEST_ID);
		tester.testQueries();

		((ConfigurableApplicationContext) context).close();
	}

}
