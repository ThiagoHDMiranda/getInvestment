// import puppeteer from "puppeteer";

// const asset = require("../pages/index.js");

import { getAsset } from "../pages/index.js";

const result = await getAsset("BBAS4");

// const result = asset.getAsset("BBAS4");
console.log(result);
