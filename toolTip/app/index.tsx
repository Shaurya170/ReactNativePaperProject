import { StyleSheet, View } from "react-native";
import Tool from "./components/Tool";

export default function Index() {
  return (
    <View style={styles.container}>
      <Tool></Tool>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  }
})
