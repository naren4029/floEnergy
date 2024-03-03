export const mockDateFormatter = {
  param: "20210101",
  result: new Date("2021-01-01 00:00"),
};

export const mockCalculateDuration = {
  param1: new Date("2021-01-01 00:00"),
  param2: new Date("2021-01-01 00:10"),
  param3: { option1: "Minutes" as "Minutes", option2: "Seconds" as "Seconds" },
  result: { result1: "10.00", result2: "600.00" },
};
