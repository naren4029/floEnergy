/**File Desc: File for feeding meter readings in to database */

import { appDataSource, initialize } from "../../config/data/data-source";
import { MeterReadings } from "../../config/data/entity/MeterReadings";
import { InsertQuery } from "../../queries/insert/meterReadings";
import { sumOfReadings } from "../../utils/dataUtil";
import { calculateDuration, dateFormatter } from "../../utils/dateTimeUtil";
import { getPercentage } from "../../utils/numberUtil";

export const feedMeterReadings = async (data: string[]) => {
  initialize()
    .then(async () => {
      const startTime = new Date();
      let completedTransactions = 0;
      let parentData = { nmi: "", interval: "" };
      const insertQuery = new InsertQuery(appDataSource);

      console.log("Data feed progressing...");
      for (let i = 0; i < data.length; i++) {
        const dataSplit = data[i].split(",");
        if (dataSplit[0] === "200") {
          parentData = {
            nmi: data[i].split(",")[1],
            interval: data[i].split(",")[8],
          };
          continue;
        }

        if (dataSplit[0] === "300") {
          if (i % 50000 === 0) {
            console.log(
              "Progress update: ",
              getPercentage(completedTransactions, data.length),
              "% completed.",
            );
          }
          const meterReadings = {
            nmi: parentData.nmi,
            interval_minutes: Number(parentData.interval),
            consumption: sumOfReadings(dataSplit.slice(2, 50)),
            timestamp: dateFormatter(dataSplit[1]),
          } as MeterReadings;
          await insertQuery.insertMeterReadingData(meterReadings);
          completedTransactions++;
        }
      }
      console.log(
        "Progress update: ",
        getPercentage(completedTransactions, data.length),
        "% completed.",
      );

      console.log(
        "Data feed completed in",
        calculateDuration(startTime, new Date(), "Minutes"),
        "minutes.",
      );
    })
    .catch((error) => console.log("error==>", error));
};
