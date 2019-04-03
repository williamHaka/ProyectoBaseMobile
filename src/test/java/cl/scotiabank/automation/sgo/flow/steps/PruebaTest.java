package cl.scotiabank.automation.sgo.flow.steps;

import org.junit.BeforeClass;
import org.junit.runners.Suite.SuiteClasses;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import cl.scotiabank.automation.sgo.flow.BaseFlow;
import cl.scotiabank.automation.sgo.stageSet.steps.PruebaStepsStageSet;

@SuiteClasses({PruebaStepsStageSet.class})
public class PruebaTest extends BaseFlow{
	private static final Logger LOGGER = LoggerFactory.getLogger(PruebaTest.class);
	@BeforeClass
	public static void flag() throws Exception {
		LOGGER.info("Ejecutando validacion de flujo...");
	}
}
