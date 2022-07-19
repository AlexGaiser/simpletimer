import { useEffect, useState } from "react";
import { Text } from "react-native";
import { getTimer, SimpleTimer } from "../../services/SimpleTimer";
import { formatTimeString } from "../../services/TimeUtils";

interface IProps {
  unixTime: number;
}
export const TimerDisplayView = ({ unixTime }: IProps) => {
  return <Text>{formatTimeString(unixTime)}</Text>;
};
