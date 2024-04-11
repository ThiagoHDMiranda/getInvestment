// const assetValue = document.getElementById("assetValue");
// const btn = document.getElementById("btn");

import { getAsset } from "./statusInvest.js";

const result = await getAsset("bbas3");

// assetValue.value = result;
console.log(result);
