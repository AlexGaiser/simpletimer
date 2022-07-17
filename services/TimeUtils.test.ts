import {
  ONE_HOUR_MILLISECONDS,
  ONE_MINUTE_MILLISECONDS,
  ONE_SECOND_MILLISECONDS,
} from "../constants/time_constants";
import {
  convertHrsMinSecToMillis,
  formatTimeString,
  getHoursFromMillis,
  getHoursMinSecondsClockTime,
  getMinutesFromMillis,
  getSecondsFromMillis,
} from "./TimeUtils";

describe("Testing Time Utils", () => {
  it("should convert milliseconds to hours", () => {
    expect(getHoursFromMillis(ONE_HOUR_MILLISECONDS)).toBe(1);
    expect(getHoursFromMillis(ONE_HOUR_MILLISECONDS + 1000)).toBe(1);
    expect(getHoursFromMillis(ONE_HOUR_MILLISECONDS * 100)).toBe(100);
    expect(getHoursFromMillis(1)).toBe(0);
  });
  it("should convert milliseconds to minutes", () => {
    expect(getMinutesFromMillis(ONE_MINUTE_MILLISECONDS)).toBe(1);
    expect(getMinutesFromMillis(ONE_MINUTE_MILLISECONDS + 1)).toBe(1);
    expect(getMinutesFromMillis(ONE_MINUTE_MILLISECONDS * 100)).toBe(100);
    expect(getMinutesFromMillis(1)).toBe(0);
  });
  it("should convert milliseconds to seconds", () => {
    expect(getSecondsFromMillis(ONE_SECOND_MILLISECONDS)).toBe(1);
    expect(getSecondsFromMillis(ONE_SECOND_MILLISECONDS + 1)).toBe(1);
    expect(getSecondsFromMillis(ONE_SECOND_MILLISECONDS * 100)).toBe(100);
    expect(getSecondsFromMillis(1)).toBe(0);
  });

  it("should get hours, minutes,seconds from milliseconds", () => {
    const timeInMillis = convertHrsMinSecToMillis(10, 10, 10);
    const { hours, minutes, seconds } =
      getHoursMinSecondsClockTime(timeInMillis);
    expect(hours).toBe(10);
    expect(minutes).toBe(10);
    expect(seconds).toBe(10);
  });

  it("should get hours, minutes, seconds, with overflow from ms", () => {
    const timeInMillis = convertHrsMinSecToMillis(100, 60, 60);

    const { hours, minutes, seconds } =
      getHoursMinSecondsClockTime(timeInMillis);
    expect(hours).toBe(101);
    expect(minutes).toBe(1);
    expect(seconds).toBe(0);
  });

  it("should get hh:mm:ss formatted time", () => {
    const timeInMillis = convertHrsMinSecToMillis(8, 10, 30);
    const ten_seconds_time = convertHrsMinSecToMillis(0, 0, 10);
    const ten_min_time = convertHrsMinSecToMillis(0, 10, 0);
    const ten_hour_time = convertHrsMinSecToMillis(10, 0, 0);
    expect(formatTimeString(timeInMillis)).toBe("08:10:30");
    expect(formatTimeString(ten_seconds_time)).toBe("00:00:10");
    expect(formatTimeString(ten_min_time)).toBe("00:10:00");
    expect(formatTimeString(ten_hour_time)).toBe("10:00:00");
    expect(formatTimeString(0)).toBe("00:00:00");
  });
});
