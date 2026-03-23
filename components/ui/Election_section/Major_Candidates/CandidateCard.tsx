import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface Candidate {
  id: string;
  name: string;
  party: string;
  constituency: string;
  imageUrl: string;

}

const CandidateCard: React.FC<{ item: Candidate }> = ({ item }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card}>
      {/* Profile Image with Border */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.profileImg} />
      </View>

      {/* Candidate Name */}
      <Text style={styles.name} numberOfLines={1}>{item.name}</Text>

      {/* Party Info (Logo + Name) */}
      <View style={styles.partyRow}>
        <Text style={[styles.partyName, { color: "red" }]}>{item.party}</Text>
      </View>

      {/* Constituency */}
      <Text style={styles.constituency}>{item.constituency}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    flex: 1,
    margin: 8,
    minHeight: 180,
    // Professional Shadow
    elevation: 4, // For Android
    shadowColor: '#000', // For iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  profileImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 4,
  },
  partyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  partyName: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  constituency: {
    fontSize: 12,
    color: '#888',
    fontWeight: '600',
  },
});

export default CandidateCard;