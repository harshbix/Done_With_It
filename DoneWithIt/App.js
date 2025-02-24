import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, SafeAreaView, Alert } from 'react-native';

export default function App() {


  return (
   <SafeAreaView style={styles.container}>
    <Button title='Click Me' color={"black"} onPress={()=> Alert.prompt("The title", "Hey you modafaka", 
    text => console.log(text)
    )}/>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1c1c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'blue',
    padding : 19,
  }
});
