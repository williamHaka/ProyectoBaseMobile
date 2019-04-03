package cl.scotiabank.automation.sgo.flow.component;

import org.junit.BeforeClass;
import org.junit.runners.Suite.SuiteClasses;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import cl.scotiabank.automation.sgo.flow.BaseFlow;
import cl.scotiabank.automation.sgo.stageSet.component.PruebaComponenteStageSet;

@SuiteClasses({PruebaComponenteStageSet.class})
public class PruebaComponentTest extends BaseFlow{
	private static final Logger LOGGER = LoggerFactory.getLogger(PruebaComponentTest.class);
	
	@BeforeClass
	public static void flag() throws Exception {
		LOGGER.info("Ejecutando validacion de flujo de componente...");
	}
}
