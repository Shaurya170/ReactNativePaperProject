import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, Tooltip } from 'react-native-paper';
import MyButton from './MyButton';


const Tool = () => (
  <View style={styles.container}>

 
  <PaperProvider>
    <Tooltip title="hello" enterTouchDelay={200} leaveTouchDelay={200} >
      <MyButton></MyButton>
    </Tooltip>
  </PaperProvider>

   </View>
);

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  }
})
 

export default Tool;