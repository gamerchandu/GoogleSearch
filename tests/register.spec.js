require('chromedriver');
const webdriver = require("selenium-webdriver");
const url = "https://www.selenium.dev/";
 
describe("executing test scenario on the website www.selenium.dev",  () => {
  let driver  = new webdriver.Builder().forBrowser('chrome').build();

  test("it performs a validation of title on the home page",  () => {
   driver.get(url);
   const title =  driver.findElement(by.tagName("h1")).getText();
   expect(title).toContain("SeleniumHQ Browser Automation");
 });
 
 test("testing in progress", ()=>{
   const title ="asd";
   expect(title).toBe("asd");
 })
  });
  
 