import { Button, StyleSheet, View } from "react-native";
import { Provider as PaperProvider, Tooltip } from "react-native-paper";

export default function Index() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Tooltip
          title="Hides all notifications"
          enterTouchDelay={1}
          leaveTouchDelay={1000}
        >
          <Button title="Do Not Disturb"></Button>
        </Tooltip>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
