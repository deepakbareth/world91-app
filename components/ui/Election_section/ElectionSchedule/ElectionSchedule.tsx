import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ElectionRow, { ElectionDetail } from './ElectionRow';

const ELECTION_DATA: ElectionDetail[] = [
{ id: '1', state: 'पश्चिम बंगाल', phases: '8 चरण', date: '27 Mar', result: '2 मई', status: 'LIVE' },
  { id: '2', state: 'तमिलनाडु', phases: '1 चरण', date: '06 Apr', result: '2 मई', status: 'LIVE' },
  { id: '3', state: 'असम', phases: '3 चरण', date: '27 Mar', result: '2 मई', status: 'LIVE' },
  { id: '4', state: 'केरल', phases: '1 चरण', date: '06 Apr', result: '2 मई', status: 'LIVE' },
  { id: '5', state: 'पुडुचेरी', phases: '1 चरण', date: '06 Apr', result: '2 मई', status: 'LIVE' },
];

const ElectionSchedule = () => {
  return (
        <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>चुनाव कार्यक्रम 2026</Text>
          <View style={styles.underline} />
        </View>

        <FlatList
          data={ELECTION_DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ElectionRow item={item} />}
          contentContainerStyle={styles.listPadding}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  safeArea: {
   
    backgroundColor: '#F8F9FA', // Light grey background makes white cards pop
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#000',
    letterSpacing: -0.5,
  },
  underline: {
    width: 50,
    height: 4,
    backgroundColor: '#D32F2F',
    marginTop: 8,
    borderRadius: 2,
  },
  listPadding: {
    paddingBottom: 20,
  },
});

export default ElectionSchedule;