import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        My name is <Text style={styles.boldText}>Dzifa</Text>
        <StatusBar style="auto"/>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

text: {
  fontSize: 24,  // Increase the font size
},

