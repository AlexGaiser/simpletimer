import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Timer from "./components/Timer/Timer";

export default function App() {
  const [startTime, setStartTime] = useState(0);

  const startTimer = () => {
    setStartTime(Date.now());
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Timer handleTimeEnd={() => alert("timer ended")} />
      <Button title="StartButton" onPress={startTimer}>
        Start
      </Button>
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
