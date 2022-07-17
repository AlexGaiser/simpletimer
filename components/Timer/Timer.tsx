import { Text } from "react-native";
import {
  convertHrsMinSecToMillis,
  formatTimeString,
  getCurrentUnixTime,
} from "../../services/TimeUtils";

interface IProps {
  handleTimeEnd: () => void;
}

const Timer = (props: IProps) => {
  const time = convertHrsMinSecToMillis(100, 10, 99);

  return <Text>{formatTimeString(time)}</Text>;
};

export default Timer;
