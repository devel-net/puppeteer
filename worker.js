const puppeteer = require("puppeteer");
const randomUseragent = require("random-useragent");

(async function(){
    const browser = await puppeteer.launch({
        headless: true,
    });
    for (let i = 0; i <= 4; i++) {
        const page = await browser.newPage();
        //await console.log(randomUseragent.getRandom());
        await page.setUserAgent(`${randomUseragent.getRandom()}`);
        try {
            await page.goto('https://google.com/');
        } catch(err) {
            console.log(err);
        }
        const userAgent = await page.evaluate(() => navigator.userAgent );
        await console.log(userAgent);
        await page.close();
    }
    await browser.close();
})()

