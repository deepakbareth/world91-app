import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';

const categories = ['All News', 'Army', 'Navy', 'Air Force',"Intelligence", 'Cyber', 'Space', 'Special Forces'];

export default function CategoryBar() {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      {categories.map((item, index) => (
        <TouchableOpacity 
          key={item} 
          style={[styles.chip, index === 0 && styles.activeChip]} // Highlighting "All News" by default
        >
          <Text style={[styles.chipText, index === 0 && styles.activeChipText]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    maxHeight: 60,
    marginVertical: 10,
  },
  contentContainer: {
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  chip: {
    backgroundColor: '#1E253A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 10,
  },
  activeChip: {
    backgroundColor: '#E53935', // The Red from your design
  },
  chipText: {
    color: '#94A3B8',
    fontWeight: '600',
  },
  activeChipText: {
    color: 'white',
  },
});