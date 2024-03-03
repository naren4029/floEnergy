import {
  mockGetDataSet,
  mockBindDataSet,
  mockSumOfReadings,
} from "../../config/mocks/dataUtil.mock";
import { getDataSet, bindDataSet, sumOfReadings } from "../dataUtil";

describe("dataUtil", () => {
  describe("getDataSet", () => {
    it("should return an object with bind as false and data as empty array when data is empty", () => {
      const result = getDataSet("");
      expect(result).toEqual({ bind: false, data: [] });
    });

    it("should return an object with bind as false and data as array of strings when data is not empty", () => {
      const result = getDataSet(mockGetDataSet.param);
      expect(result).toEqual(mockGetDataSet.result);
    });
  });

  describe("bindDataSet", () => {
    it("should return the data when data is empty", () => {
      const result = bindDataSet(mockBindDataSet.param1, {
        bind: false,
        data: [],
      });
      expect(result).toEqual(mockBindDataSet.param1);
    });

    it("should return the concat result when bind flag is false", () => {
      const result = bindDataSet(
        mockBindDataSet.param1,
        mockBindDataSet.param2,
      );
      expect(result).toEqual(mockBindDataSet.result);
    });
  });

  describe("sumOfReadings", () => {
    it("should return 0 when data is empty", () => {
      const result = sumOfReadings([]);
      expect(result).toEqual(0);
    });
    it("should return the sum of readings", () => {
      const result = sumOfReadings(mockSumOfReadings.param);
      expect(result).toEqual(31.444);
    });
  });
});
