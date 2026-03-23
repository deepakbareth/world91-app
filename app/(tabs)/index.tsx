import ElectionSchedule from '@/components/ui/Election_section/ElectionSchedule/ElectionSchedule';
import ElectionStates from '@/components/ui/Election_section/electionstates/ElectionStates';
import CandidateList from '@/components/ui/Election_section/Major_Candidates/CandidateList';
import ResultsGrid from '@/components/ui/Election_section/ResultSection/ResultsGrid';
import FeaturedCard from '@/components/ui/FeaturedCard';
import LatestNews from '@/components/ui/LatestNews';
import { ScrollView, StyleSheet } from 'react-native';
import CategoryBar from '../../components/ui/CategoryBar'; // Imported from your components folder


export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* 1. Header Component (Logo & Search) */}
      {/* <Header />    // becouse i have header in the main layout so i dont need to add it here */}

      {/* 2. Category Filter Bar (Army, Navy, etc.) */}
      <CategoryBar />

      {/* 3. Featured Content Card */}
      <FeaturedCard />
      <ElectionStates />
      <ResultsGrid />
      <ElectionSchedule />
      <CandidateList />

<hr />

      <LatestNews />


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1021', // Dark Navy
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 25,
    marginBottom: 15,
    letterSpacing: 1,
  },
});