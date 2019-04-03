package cl.scotiabank.automation.sgo.flow;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;
import org.openqa.selenium.support.PageFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import cl.scotiabank.automation.sgo.AppiumServer;
import cl.scotiabank.automation.sgo.model.MobileModel;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

@RunWith(Suite.class)
@SuiteClasses({})
public class BaseFlow {
	public static final Logger LOGGER = LoggerFactory.getLogger(BaseFlow.class);
	public static AppiumDriver<MobileElement> driver;
	public static MobileModel mobileModel;
	private static AppiumServer appium;
	public static final String scotiapackage = "cl.scotiabank.dummy";
	private static Boolean ios = true;

	@BeforeClass
    public static void setUp() throws MalformedURLException {
		appium = new AppiumServer();
		startAppium(ios);
	}
	
	@SuppressWarnings("unchecked")
	private static void startAppium(Boolean ios) {
		try {
			if(ios) {
	            driver = appium.getIOSDriver();
	        }else {
	            driver = new AndroidDriver<>(new URL("http://127.0.0.1:4723/wd/hub"), appium.capabilities());
	        }
			driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
            mobileModel = PageFactory.initElements(driver, MobileModel.class);
		} catch (Exception e) {
			LOGGER.info(e.toString());
		}
	}
	
	 @AfterClass
	    public static void finish() {
	        LOGGER.info("*********************************************************");
	        LOGGER.info("**   Finaliza ciclo de pruebas automatizadas - Android **");
	        LOGGER.info("*********************************************************");
//	        htmlReport.generaHTML();
	        driver.quit();
	    }
}
