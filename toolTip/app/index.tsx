import { View } from "react-native";
import Tool from "./components/Tool";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tool></Tool>
    </View>
  );
}
