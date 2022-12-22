import puppeteer from 'puppeteer';

const baseURL = "http://localhost:3000";

let page;
let browser;

beforeEach(async() => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto(baseURL);
})
afterEach(async()=>{
  await browser.close();
})

// Test homepagina
test("Test baseURL", async() =>{
  const url = await page.url();
  expect(url).toContain(baseURL);
})