import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
  <TouchableHighlight onPress={() => { console.log("clicked")}}>
      <Image
      source={  
         {width: 400,
        height: 300,
        uri: "https://picsum.photos/200"}} />
  </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1c1c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
