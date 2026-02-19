import { Link } from 'expo-router';
import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NewsContext } from '../context/NewsContext';

export default function LatestNews() {
  // 1. Grab the whole context object
  const context = useContext(NewsContext);

  // 2. TypeScript safety check: If context is null, don't try to render
  if (!context) {
    return null; 
  }

  // 3. Extract the actual array out of the context!
  const { news } = context;

  return (
    <View style={styles.container}>
      
      {/* --- SECTION HEADER --- */}
      <View style={styles.sectionHeader}>
        <View style={styles.redLine} />
        <Text style={styles.sectionHeaderText}>LATEST INTELLIGENCE</Text>
      </View>
    

      {/* --- NEWS LIST --- */}
      {/* 4. Now we can safely map over the 'news' array */}
      {news.map((item) => (
        <Link href={`/article/${item.id}`} asChild key={item.id}>
        <View key={item.id} style={styles.articleCard}>
          
          <View style={styles.textContent}>
            <View style={styles.metaRow}>
              <Text style={styles.categoryText}>{item.category}</Text>
              <Text style={styles.sourceText}>  |  {item.source}</Text>
            </View>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.snippetText} numberOfLines={2}>
              {item.snippet}
            </Text>
          </View>

          <Image 
            source={{ uri: item.image }} 
            style={styles.thumbnail} 
          />
          
        </View>
        </Link>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 30, 
    paddingBottom: 40, 
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  redLine: {
    width: 2,
    height: 12,
    backgroundColor: '#E53935',
    marginRight: 8,
  },
  sectionHeaderText: {
    color: '#8A94A6',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  articleCard: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-between',
    borderColor: '#555555',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 24, 
  },
  textContent: {
    flex: 1, 
    marginRight: 16, 
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  categoryText: {
    color: '#E53935',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  sourceText: {
    color: '#0059ff',
    fontSize: 10,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
    marginBottom: 6,
  },
  snippetText: {
    color: '#8A94A6',
    fontSize: 12,
    lineHeight: 18,
  },
  thumbnail: {
    width: 75,
    height: 75,
    borderRadius: 5, 
    backgroundColor: '#1E253A', 
  },
});