import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CandidateCard, { Candidate } from './CandidateCard';

const CANDIDATE_DATA: Candidate[] = [
  {
    id: '1',
    name: 'ममता बनर्जी',
    party: 'TMC',
    constituency: 'नंदीग्राम',
 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Official_portrait_of_Mamata_Banerjee.jpg',
  },
  {
    id: '2',
    name: 'शुभेंदु अधिकारी',
    party: 'BJP',
    constituency: 'नंदीग्राम',
   
    imageUrl: 'https://prsindia.org/files/mptrack/16-lok-sabha/profile_image/160521.jpg',
  },
  {
    id: '3',
    name: 'एम.के. स्टालिन',
    party: 'DMK',
    constituency: 'कोलाथुर',
   
    imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202505/mk-stalin-023615117-16x9_0.jpg?VersionId=pR2LP0OS_qCqM9S_rXzZNMkWqOB4PMRy&size=690:388',
  },
  {
    id: '4',
    name: 'ई.के. पलानीस्वामी',
    party: 'AIADMK',
    constituency: 'एडापाडी',
    
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufmjCuLMKfGAEOuCK3HUEOLHM2wv2SgWPWw&s',
  },
  {
    id: '5',
    name: 'हिमंत बिस्वा सरमा',
    party: 'BJP',
    constituency: 'जालुकबारी',
  
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Himanta_Biswa_Sarma_in_2025.jpg',
  },
  {
    id: '6',
    name: 'पी विजयन',
    party: 'CPI(M)',
    constituency: 'धर्मदम',
   
    imageUrl: 'https://images.news18.com/ibnkhabar/uploads/2025/06/Pinarayi-Vijayan-2025-06-24e9afeaf7c6f02fef4e128752b039f6.jpg?impolicy=website&width=640&height=480',
  },
];

const CandidateList = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Section Title */}
      <View style={styles.headerRow}>
        <View style={styles.iconBox}>
           <Text style={styles.headerIcon}>👤</Text>
        </View>
        <Text style={styles.titleText}>प्रमुख उम्मीदवार</Text>
      </View>

      <FlatList
        data={CANDIDATE_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CandidateCard item={item} />}
        numColumns={2} // Creates the 2x2 grid
        contentContainerStyle={styles.listPadding}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
   
   backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    marginBottom: 8,
  },
  iconBox: {
    backgroundColor: '#ebeaea',
    width: 30,
    height: 30,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  headerIcon: {
    fontSize: 16,
    color: '#ff5252',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  listPadding: {
    paddingBottom: 20,
  },
});

export default CandidateList;