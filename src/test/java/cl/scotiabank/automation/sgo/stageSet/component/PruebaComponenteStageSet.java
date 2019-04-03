package cl.scotiabank.automation.sgo.stageSet.component;

import org.junit.runner.RunWith;

import cl.scotiabank.automation.sgo.stageSet.StageSet;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		tags = { 
				  "@tag1,"
				  + "@tag2"
		})
//		,plugin= {"com.cucumber.listener.ExtentCucumberFormatter:Reporte/ReporteSolicitaCreditoConsumoComponente.html"})
public class PruebaComponenteStageSet extends StageSet{

}
