// import puppeteer from "puppeteer";

// const asset = require("../pages/index.js");

import { getAsset } from "./index.js";

const result = await getAsset("BBAS3");

// const result = asset.getAsset("BBAS4");
console.log(result);
