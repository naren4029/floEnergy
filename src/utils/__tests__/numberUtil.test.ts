import { getPercentage } from "../numberUtil";

describe("numberUtil", () => {
  describe("getPercentage", () => {
    it("should return 0 when dividend is 0", () => {
      expect(getPercentage(0, 10)).toBe(0);
    });

    it("should return 100 when dividend is equal to divisor", () => {
      expect(getPercentage(10, 10)).toBe(100);
    });

    it("should return 50 when dividend is half of divisor", () => {
      expect(getPercentage(5, 10)).toBe(50);
    });

    it("should return 33 when dividend is one third of divisor", () => {
      expect(getPercentage(1, 3)).toBe(33);
    });
  });
});
