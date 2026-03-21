import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ResultCard, { ElectionResult } from './ResultCard';

export const MOCK_RESULTS: ElectionResult[] = [
 {
    id: '1',
    state: 'पश्चिम बंगाल',
    totalSeats: 294,
    majority: 148,
    parties: [
      { name: 'TMC+', seats: 165, previous: 211, change: '-46', color: '#28a745', logo: { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/All_India_Trinamool_Congress_logo.svg/1920px-All_India_Trinamool_Congress_logo.svg.png' } },
      { name: 'BJP+', seats: 110, previous: 77, change: '+33', color: '#ff9933', logo: { uri: 'https://allpngfree.com/apf-prod-storage-api/storage/thumbnails/bjp-logo-png_-bhartiya-janta-party-logo-png-transparent-image--thumbnail-1663175517.jpg' } },
      { name: 'LF+INC', seats: 15, previous: 0, change: '+15', color: '#cc0000', logo: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6xkhX_zg199d6HUYtJB-ANrDnuGAtsen6Q&s' } },
      { name: 'OTH', seats: 4, previous: 6, change: '-2', color: '#666666', logo: { uri: '' } },
    ]
  },
  {
    id: '2',
    state: 'तमिलनाडु',
    totalSeats: 234,
    majority: 118,
    parties: [
      { name: 'DMK+', seats: 145, previous: 133, change: '+12', color: '#cc0000', logo: { uri: 'https://m.media-amazon.com/images/I/513rOuG+0vS.jpg' } },
      { name: 'AIADMK+', seats: 82, previous: 66, change: '+16', color: '#28a745', logo: { uri: 'https://i.pinimg.com/736x/bb/2d/0c/bb2d0ccbc56fa6dc2bf133daa4c13167.jpg' } },
      { name: 'OTH', seats: 7, previous: 35, change: '-28', color: '#666666', logo: { uri: '' } },
    ]
  },
  {
    id: '3',
    state: 'असम',
    totalSeats: 126,
    majority: 64,
    parties: [
      { name: 'BJP+', seats: 78, previous: 60, change: '+18', color: '#ff9933', logo: { uri: 'https://allpngfree.com/apf-prod-storage-api/storage/thumbnails/bjp-logo-png_-bhartiya-janta-party-logo-png-transparent-image--thumbnail-1663175517.jpg' } },
      { name: 'INC+', seats: 42, previous: 39, change: '+3', color: '#28a745', logo: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6xkhX_zg199d6HUYtJB-ANrDnuGAtsen6Q&s' } },
      { name: 'OTH', seats: 6, previous: 27, change: '-21', color: '#666666', logo: { uri: '' } },
    ]
  },
  {
    id: '4',
    state: 'केरल',
    totalSeats: 140,
    majority: 71,
    parties: [
      { name: 'LDF', seats: 85, previous: 91, change: '-6', color: '#cc0000', logo: { uri: 'https://i.pinimg.com/736x/4a/8a/67/4a8a67efb980205c040001532c6fed00.jpg' } },
      { name: 'UDF', seats: 53, previous: 41, change: '+12', color: '#3399ff', logo: { uri: 'https://cdn.vectorstock.com/i/1000v/87/80/udf-logo-design-template-with-strong-and-modern-vector-53938780.jpg' } },
      { name: 'NDA', seats: 2, previous: 0, change: '+2', color: '#ff9933', logo: { uri: 'https://allpngfree.com/apf-prod-storage-api/storage/thumbnails/bjp-logo-png_-bhartiya-janta-party-logo-png-transparent-image--thumbnail-1663175517.jpg' } },
      { name: 'OTH', seats: 0, previous: 8, change: '-8', color: '#666666', logo: { uri: '' } },
    ]
  },
  {
    id: '5',
    state: 'पुडुचेरी',
    totalSeats: 30,
    majority: 16,
    parties: [
      { name: 'NDA', seats: 18, previous: 16, change: '+2', color: '#ff9933', logo: { uri: 'https://allpngfree.com/apf-prod-storage-api/storage/thumbnails/bjp-logo-png_-bhartiya-janta-party-logo-png-transparent-image--thumbnail-1663175517.jpg' } },
      { name: 'SDA', seats: 10, previous: 8, change: '+2', color: '#28a745', logo: { uri: 'https://i.pinimg.com/736x/ea/1d/22/ea1d220a280be38853d3b8d056d7b89d.jpg' } },
      { name: 'OTH', seats: 2, previous: 6, change: '-4', color: '#666666', logo: { uri: '' } },
    ]
  },
];

const ResultsGrid: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topHeader}>
        <Text style={styles.mainTitle}>📈 लाइव रुझान और परिणाम</Text>
        <View style={styles.liveBadge}><Text style={styles.liveText}>● LIVE</Text></View>
      </View>
      
      <View style={styles.grid}>
        {MOCK_RESULTS.map(item => (
          <View key={item.id} style={styles.column}>
            <ResultCard data={item} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {  backgroundColor: '#f8f9fa' ,paddingBottom: 20  },
  topHeader: { flexDirection: 'row', padding: 20, alignItems: 'center', justifyContent: 'space-between' },
  mainTitle: { fontSize: 20, fontWeight: 'bold' },
  liveBadge: { backgroundColor: 'red', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 },
  liveText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10 },
  column: { width: '100%', paddingHorizontal: 5 }, // Use 100% for mobile vertical scroll or 50% for side-by-side
});

export default ResultsGrid;