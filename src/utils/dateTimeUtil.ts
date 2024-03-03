/**File Desc: Contains utility function(s) for date and time validation */

export const dateFormatter = (date: string) => {
  const dateValue = date.split("");
  dateValue.splice(4, 0, "-");
  dateValue.splice(7, 0, "-");
  return new Date(dateValue.join("") + " 00:00");
};

export const calculateDuration = (
  start: Date,
  end: Date,
  returnBy: "Minutes" | "Seconds",
) => {
  const duration = (end.getTime() - start.getTime()) / 1000;
  if (returnBy === "Seconds") {
    return duration.toFixed(2);
  }
  return (duration / 60).toFixed(2);
};
