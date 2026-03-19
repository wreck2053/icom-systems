const puppeteer = require('puppeteer');

const BASE = 'http://localhost:3000';
const MOBILE = { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true };

const shots = [
  { name: 'mobile-01-hero',       url: BASE,                    delay: 2500 },
  { name: 'mobile-02-nav-open',   url: BASE,                    delay: 2500, tap: '.nav-hamburger' },
  { name: 'mobile-03-products',   url: BASE + '/product-page',  delay: 2500 },
  { name: 'mobile-04-about',      url: BASE + '/about-page',    delay: 2500 },
  { name: 'mobile-05-detail',     url: BASE + '/product/CRUCIAL/id/0', delay: 2500 },
];

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport(MOBILE);

  for (const shot of shots) {
    await page.goto(shot.url, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, shot.delay));

    if (shot.tap) {
      await page.tap(shot.tap).catch(() => {});
      await new Promise(r => setTimeout(r, 500));
    }

    await page.screenshot({ path: `screenshots/${shot.name}.png` });
    console.log(`✓ ${shot.name}.png`);
  }

  await browser.close();
  console.log('Done.');
})();
