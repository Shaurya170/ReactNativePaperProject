import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function TouchableHighlightExample() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#DDDDDD"
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>Do Not Disturb</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3f007aff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  counter: {
    marginTop: 20,
    fontSize: 16,
  },
});
