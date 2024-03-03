/**File Desc: Main file to be called when process starts */

import "reflect-metadata";

import { createReadStream } from "node:fs";
import { pathInfo, encoding } from "./config/constants";

import { bindDataSet, getDataSet } from "./utils/dataUtil";
import { feedMeterReadings } from "./transactions/feedMeterReadings";
import { calculateDuration } from "./utils/dateTimeUtil";

const streamReader = createReadStream(
  `${pathInfo.directory}/${pathInfo.file}`,
  { encoding },
);

let hasStarted = false;
let startTime: Date;
let data: string[] = [];

streamReader.on("data", (chunk) => {
  if (!hasStarted) {
    startTime = new Date();
    hasStarted = true;
    console.log("Streaming file data started...");
  }
  data = bindDataSet(data, getDataSet(chunk as string));
});

streamReader.on("error", (error) => {
  console.log("Streaming error name==>", error.name);
  console.log("Streaming error message==>", error.message);
  console.log("Streaming error stack==>", error.stack);
});

streamReader.on("end", () => {
  console.log(
    "Streaming completed in ",
    calculateDuration(startTime, new Date(), "Seconds"),
    " seconds for ",
    data.length,
    " records.",
  );

  if (data && data.length) {
    feedMeterReadings(data);
  }
});
