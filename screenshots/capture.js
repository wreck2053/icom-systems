const puppeteer = require('puppeteer');

const BASE = 'http://localhost:3000';
const VIEWPORT = { width: 1440, height: 900 };

const shots = [
  { name: '01-hero',        url: BASE,                delay: 2500 },
  { name: '02-products',    url: BASE + '/product-page', delay: 2500 },
  { name: '03-megamenu',    url: BASE,                delay: 2500, hover: '.nav-dropdown-wrapper' },
  { name: '04-product-detail', url: BASE + '/product/CRUCIAL/id/0', delay: 2500 },
  { name: '05-about',       url: BASE + '/about-page', delay: 2500 },
];

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);

  for (const shot of shots) {
    await page.goto(shot.url, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, shot.delay));

    if (shot.hover) {
      await page.hover(shot.hover).catch(() => {});
      await new Promise(r => setTimeout(r, 600));
    }

    await page.screenshot({ path: `screenshots/${shot.name}.png`, fullPage: shot.fullPage ?? false });
    console.log(`✓ ${shot.name}.png`);
  }

  await browser.close();
  console.log('Done.');
})();
