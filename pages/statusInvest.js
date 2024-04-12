import puppeteer from "puppeteer";

async function getAsset(asset) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const url = `https://statusinvest.com.br/acoes/${asset}`;

  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
  );
  await page.goto(url);

  const priceXpath =
    '//*[@id="main-2"]/div[2]/div/div[1]/div/div[1]/div/div[1]/strong';

  const price = await page.waitForSelector("xpath/" + priceXpath);

  const result = await page.evaluate(
    (price) => price.textContent.trim(),
    price,
  );

  // --Another way to do it--
  // const getValueByClassName = await page.evaluate(() => {
  //   return document.getElementsByClassName("value")[0].innerHTML;
  // });
  // console.log(getValueByClassName);

  await browser.close();

  return result;
}

export { getAsset };
