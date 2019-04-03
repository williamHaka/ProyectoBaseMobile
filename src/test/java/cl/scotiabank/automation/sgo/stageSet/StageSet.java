package cl.scotiabank.automation.sgo.stageSet;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(	features = "src/test/resources/features/", 
					glue = "cl/scotiabank/automation/sgo/definition/", 
					plugin = { 
						"pretty:target/reportes/pretty/pretty.txt", 
						"html:target/reportes/html",
						"json:target/reportes/json/report.json", 
						"junit:target/reportes/junit/junit.xml", 
						"usage:target/reportes/usage/usage.json", 
						"rerun:target/reportes/rerun/rerun.txt",
					})
public class StageSet {
	@AfterClass
	public static void writeExtentReport() {
//		Agregar en caso de implementar extends-report
//		Reporter.loadXMLConfig(new File(System.getProperty("user.dir") + "/src/test/resources/config/extent-config.xml"));
	}
}
