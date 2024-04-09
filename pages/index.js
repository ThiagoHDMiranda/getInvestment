import puppeteer from "puppeteer";

async function getAsset(asset) {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(`https://statusinvest.com.br/acoes/${asset}`);

  const result = await page.evaluate(() => {
    return document.getElementsByClassName("value")[0].innerText;
  });

  // Wait and click on first result
  // const searchResultSelector = ".devsite-result-item-link";
  // await page.waitForSelector(searchResultSelector);
  // await page.click(searchResultSelector);

  // // Locate the full title with a unique string
  // const textSelector = await page.waitForSelector(
  //   "text/Customize and automate"
  // );
  // const fullTitle = await textSelector?.evaluate((el) => el.textContent);

  // // Print the full title
  // console.log('The title of this blog post is "%s".', fullTitle);

  // await browser.close();

  return result;
}
const getResult = await getAsset("ITSA4");
console.log(getResult);

export { puppeteer, getAsset };

// exports.getAsset = getAsset;
