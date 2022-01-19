const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://www.ravnik.org/cv/', {waitUntil: ['networkidle2','domcontentloaded','load'],timeout: 20000});
    await page.pdf({path: 'cv.pdf', format: 'A4',timeout:20000});
    await browser.close();
})();
