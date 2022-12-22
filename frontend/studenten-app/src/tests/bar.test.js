import puppeteer from 'puppeteer';
jest.setTimeout(20000);
const baseURL = "http://localhost:3000";

test('Test bar aanmaken pagina', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 40,
        args: ['--window-size=1920,1080']
    });

    const page = await browser.newPage();
    await page.goto(baseURL + "/addbar");

    await page.click('#barNaam');
    await page.type('#barNaam', "Studenten Bar")
    await page.click('#barLocatie');
    await page.type('#barLocatie', 'Tilburg');
    await page.click('#barSubmit');
    page.on('dialog', async dialog => {
        await dialog.accept();
    });
    await page.goto(baseURL + "/adminbar")
})
