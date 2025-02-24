import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

const handlePress = () =>
{
  console.log("CLicked");
}
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>this is a very long text guys i wish i hadnt done something like that in a minute you know tory lanes</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
