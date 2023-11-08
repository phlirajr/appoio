import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>EXPO ROUTER</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text:{
    color: "forestgreen",
    fontWeight: '700',
    fontStyle:"italic",
  }
});
