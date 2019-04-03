package cl.scotiabank.automation.sgo;

import java.io.IOException;
import java.net.ServerSocket;

import org.openqa.selenium.remote.DesiredCapabilities;

import cl.scotiabank.automation.sgo.flow.BaseFlow;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import io.appium.java_client.remote.MobilePlatform;
import io.appium.java_client.service.local.AppiumDriverLocalService;
import io.appium.java_client.service.local.AppiumServiceBuilder;
import io.appium.java_client.service.local.flags.GeneralServerFlag;

public class AppiumServer {
    private AppiumDriverLocalService service;

    /**
     * Configuracion e iniciacion de servidor Appium
     *
     * @return Void
     **/
    public void startServer() {
        // Configuracion appium server
        checkIfServerIsRunnning(Integer.parseInt(System.getenv("PORT_APPIUM")));
        AppiumServiceBuilder builder = new AppiumServiceBuilder();
        builder.withIPAddress(System.getenv("IP_ADDRESS_APPIUM"));
        builder.usingPort(Integer.parseInt(System.getenv("PORT_APPIUM")));
        builder.withCapabilities(capabilities());
        builder.withArgument(GeneralServerFlag.SESSION_OVERRIDE);
        builder.withArgument(GeneralServerFlag.LOG_LEVEL, "error");

        // Inicia servicio appium server
        service = AppiumDriverLocalService.buildService(builder);
        service.start();
    }

    /**
     * Detiene el servidor Appium
     *
     * @return Void
     **/
    public void stopServer() {
        service.stop();
    }

    /**
     * Configuracion de DesiredCapabilities que se entregaran a appium para que se ejecute
     *
     * @return DesiredCapabilities
     **/
    public DesiredCapabilities capabilities() {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, "UiAutomator2");
        capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "emulator-5554");
        // Ruta de APK a instalar
        // capabilities.setCapability(MobileCapabilityType.APP,
        // System.getenv("APP_INSTALL"));
        capabilities.setCapability(MobileCapabilityType.VERSION, "7.0");
        capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, MobilePlatform.ANDROID);
        capabilities.setCapability("appPackage", BaseFlow.scotiapackage);
        capabilities.setCapability("appActivity", "cl.scotiabank.scotiabankgo.splash.view.activity.SplashActivity");
        capabilities.setCapability("unicodeKeyboard", true);
        capabilities.setCapability("resetKeyboard", true);
        // Tiempo en segundos antes de esperar a cerrar sesion por inactividad
        // para este caso se configuro 30min
        capabilities.setCapability(MobileCapabilityType.NEW_COMMAND_TIMEOUT, 1800);
        //capabilities.setCapability(MobileCapabilityType.FULL_RESET, true);
        //Borra datos de app, para iniciar desde cero
        capabilities.setCapability(MobileCapabilityType.NO_RESET, true);

        return capabilities;
    }

	@SuppressWarnings("rawtypes")
	public AppiumDriver getIOSDriver() {
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability(MobileCapabilityType.PLATFORM_VERSION, "12.1");
		capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "iPhone X");
		// capabilities.setCapability(MobileCapabilityType.APP, appUrl);
		capabilities.setCapability("bundleId", "cl.scotiabank.ScotiabankGO"); // todo set from script
		capabilities.setCapability("connectHardwareKeyboard", false);
		return new IOSDriver(capabilities);
	}

	/**
	 * Comprueba si puerto esta en uso, si estÃ¡ en uso lo libera, no realiza nada en caso contrario
	 * 
	 * @param int
	 *            port
	 * 
	 * @return true esta en uso el puerto, false no esta en uso o se libero puerto
	 **/
	public static boolean checkIfServerIsRunnning(int port) {
		boolean isServerRunning = false;
		ServerSocket serverSocket;
		try {
			serverSocket = new ServerSocket(port);
			serverSocket.close();
		} catch (IOException e) {
			isServerRunning = true;
		} finally {
			serverSocket = null;
		}
		return isServerRunning;
	}
}
