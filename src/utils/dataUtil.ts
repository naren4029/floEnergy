/**File Desc: Contains utility function(s) for data validation */

import { GetDataSetType } from "../config/constants/types";

export const getDataSet = (data: string): GetDataSetType => {
  if (!data) {
    return { bind: false, data: [] };
  }

  const rowData = data.split(" ");
  const recordNumbers = ["100", "200", "300", "400", "500", "900"];

  if (recordNumbers.indexOf(rowData[0].split(",")[0]) > -1) {
    return { bind: false, data: rowData };
  }

  return { bind: true, data: rowData };
};

export const bindDataSet = (
  data: string[],
  binderData: GetDataSetType,
): string[] => {
  if (!binderData.data.length) {
    return data;
  }
  if (!binderData.bind) {
    return data.concat(binderData.data);
  }

  const lastData = data.pop() || "";
  const firstBinderData = binderData.data.shift() || "";
  data[data.length - 1] = lastData + firstBinderData;
  return data.concat(binderData.data);
};

export const sumOfReadings = (data: string[]): number => {
  if (!data.length) {
    return 0;
  }
  const sum = data.reduce((a, b) => Number(a) + Number(b), 0);
  return Number(sum.toFixed(3));
};
