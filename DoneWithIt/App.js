import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {

const handlePress = () =>
{
  console.log("CLicked");
}
  return (
    <View style={styles.container}>
      
      {/* <Text >Hello World!</Text> */}
      <Image
      source={  
         {width: 400,
        height: 300,
        uri: "https://picsum.photos/200"}} />
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
