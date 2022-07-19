import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, Vibration } from "react-native";
import { Timer } from "./components/Timer/Timer";

export default function App() {
  const [startTime, setStartTime] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Timer
        hours={0}
        minutes={0}
        seconds={5}
        handleTimeEnd={() => {
          Vibration.vibrate([2000, 2000, 2000, 2000], true);
        }}
      />
      <Button title="stopvibration" onPress={() => Vibration.cancel()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
