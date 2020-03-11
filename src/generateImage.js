const puppeteer = require('puppeteer');

export const generateImage = async html => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({
    width: 1320, // bug in charts when use smaller width, need to investigate library
    height: 350,
    deviceScaleFactor: 1
  });

  const imageName = `chart-${Math.random()}.png`;

  await page.goto('http://localhost:3030/');

  await page.setContent(html);

  await page.screenshot({ path: `${imageName}` });

  await browser.close();

  return imageName;
};
