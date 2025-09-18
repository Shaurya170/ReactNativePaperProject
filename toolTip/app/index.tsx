import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider, Tooltip } from "react-native-paper";
import MyButton from "./components/MyButton";

export default function Index() {
  return (
    <PaperProvider>
    <View style={styles.container}>
      
      <Tooltip title='gello' enterTouchDelay={1000} leaveTouchDelay={1000}>
      <MyButton></MyButton>
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
  }
})
