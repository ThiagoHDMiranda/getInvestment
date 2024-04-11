import puppeteer from "puppeteer";

async function getAsset(asset) {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Navigate the page to a URL
  const url = `https://www.google.com.br/search?q=${asset}&sca_esv=2f117a9d5558e9fb&sca_upv=1&sxsrf=ACQVn0_rbyloYJjkYamwv67F9mbPIheDQA%3A1712659154651&source=hp&ei=0hoVZpfsJJDV1sQPluu2kAo`;
  await page.goto(url, { waitUntil: "domcontentloaded" });

  // await page.waitForNavigation({ timeout: 0, waitUntil: "load" });
  const result = await page.evaluate(() => {
    return document.getElementsByClassName("IsqQVc NprOob")[0].innerHTML;
  });

  await browser.close();

  return result;
}

export { getAsset };
