import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import { getTimer, SimpleTimer } from "../../services/SimpleTimer";
import {
  convertHrsMinSecToMillis,
  formatTimeString,
  getCurrentUnixTime,
} from "../../services/TimeUtils";
import { TimerDisplayView } from "./TimerDisplayView";

interface IProps {
  handleTimeEnd: () => void;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Timer = ({ hours, minutes, seconds, handleTimeEnd }: IProps) => {
  const [time, setTime] = useState(0);
  const duration = convertHrsMinSecToMillis(hours, minutes, seconds);
  const timer = new SimpleTimer(duration);

  useEffect(() => {
    timer.onTick(setTime);
    timer.onTimeEnd(handleTimeEnd);
  }, []);

  return (
    <View>
      <TimerDisplayView unixTime={time} />
      <Button title="StartButton" onPress={() => timer.start()}>
        Start
      </Button>
    </View>
  );
};
