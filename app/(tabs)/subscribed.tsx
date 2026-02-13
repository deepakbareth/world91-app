import { View, Text, StyleSheet } from 'react-native';

export default function SubscribedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Subscribed Channels</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1021',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});