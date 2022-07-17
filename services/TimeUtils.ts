import { MILLIS } from "../constants/time_constants";

export const getTimeDigitStr = (num: number): string => {
  if (!num) return "00";
  return num < 10 ? `0${num}` : `${num}`;
};

export const getSecondsFromMillis = (millis: number) => {
  return Math.floor(millis / 1000);
};

export const getMinutesFromMillis = (millis: number): number => {
  return Math.floor(getSecondsFromMillis(millis) / 60);
};

export const getHoursFromMillis = (millis: number): number => {
  return Math.floor(getMinutesFromMillis(millis) / 60);
};

interface HoursMinutesSecondsObject {
  hours: number;
  minutes: number;
  seconds: number;
}

export const getHoursMinSecondsClockTime = (
  millis: number
): HoursMinutesSecondsObject => {
  const hours = getHoursFromMillis(millis);
  const minutes = getMinutesFromMillis(millis) % 60;
  const seconds = getSecondsFromMillis(millis) % 60;

  return {
    hours,
    minutes,
    seconds,
  };
};

export const convertByFactor = (factor: number) => (n: number) => {
  return n * factor;
};

export const convertHoursToMillis = convertByFactor(MILLIS.hour);
export const convertSecondsToMillis = convertByFactor(MILLIS.second);
export const convertMinutesToMillis = convertByFactor(MILLIS.minute);

export const convertHrsMinSecToMillis = (h: number, m: number, s: number) => {
  return (
    convertHoursToMillis(h) +
    convertMinutesToMillis(m) +
    convertSecondsToMillis(s)
  );
};

export const formatTimeString = (unixTime: number): string => {
  const { hours, minutes, seconds } = getHoursMinSecondsClockTime(unixTime);
  return `${getTimeDigitStr(hours)}:${getTimeDigitStr(
    minutes
  )}:${getTimeDigitStr(seconds)}`;
};

export const getCurrentUnixTime = (): number => {
  return Date.now();
};

export const isTimeAfter = (time1: number, time2: number) => {
  return time1 > time2;
};
