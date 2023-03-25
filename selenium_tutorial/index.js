const { Builder, Capabilities, Browser, By, Key, until } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');

const chromeOptions = Options.chrome();

(
  async function googleSearch() {

    const driver = new Builder()
                            .forBrowser(Browser.CHROME)
                            .usingServer('http://selenium_standalone_manual:4444/wd/hub')
                            .build();

    try {
      // Navigate
      await driver.get("https://www.google.com");

      await driver.findElement(By.name("q"))
                  .sendKeys("Automation Bro", Key.ENTER);

      const firstResult = await driver.wait(
        until.elementLocated(By.css("h3")),
        10000
      );

      console.log(await firstResult.getAttribute("textContent"))

      await driver.close();
      await driver.quit();

    } catch (error) {
      console.log(error);
    }
  }
)()