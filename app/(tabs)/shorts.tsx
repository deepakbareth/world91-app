import { View, Text, StyleSheet } from 'react-native';

export default function ShortsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shorts Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1021', // Dark Navy
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});