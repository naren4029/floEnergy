import {
  mockCalculateDuration,
  mockDateFormatter,
} from "../../config/mocks/dateUtil.mock";
import { dateFormatter, calculateDuration } from "../dateTimeUtil";

describe("dateTimeUtil", () => {
  describe("dateFormatter", () => {
    it("should return a hyphen seprated date in YYYY=mm-dd hh:mm format", () => {
      const result = dateFormatter(mockDateFormatter.param);
      expect(result).toEqual(mockDateFormatter.result);
    });
  });

  describe("calculateDuration", () => {
    it("should return the duration in minutes", () => {
      const result = calculateDuration(
        new Date(mockCalculateDuration.param1),
        new Date(mockCalculateDuration.param2),
        mockCalculateDuration.param3.option1,
      );
      expect(result).toEqual(mockCalculateDuration.result.result1);
    });

    it("should return the duration in seconds", () => {
      const result = calculateDuration(
        new Date(mockCalculateDuration.param1),
        new Date(mockCalculateDuration.param2),
        mockCalculateDuration.param3.option2,
      );
      expect(result).toEqual(mockCalculateDuration.result.result2);
    });
  });
});
