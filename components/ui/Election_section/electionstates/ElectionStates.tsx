import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import StateCard, { ElectionState } from './StateCard';

export const ELECTION_DATA: ElectionState[] = [
  {
    id: '1',
    stateName: 'पश्चिम बंगाल',
    date: 'April 2026',
    seats: '294 सीटें',
    imageUrl: 'https://t4.ftcdn.net/jpg/03/68/05/51/360_F_368055107_Kjvi0bEEiks16S2ptIpRBDXkG4npMCCW.jpg',
  },
  {
    id: '2',
    stateName: 'तमिलनाडु',
    date: 'April 2026',
    seats: '234 सीटें',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=500',
  },
  {
    id: '3',
    stateName: 'असम',
    date: 'April 2026',
    seats: '126 सीटें',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMaWoYz5Qkrdr4AqTJN1fK6wslW4F4nPrbg&s',
  },
  {
    id: '4',
    stateName: 'केरल',
    date: 'April 2026',
    seats: '140 सीटें',
    imageUrl: 'https://www.yoyotripsindia.com/images/state/3uXf6rLz6c/kerala-banner4.png',
  },
  {
    id: '5',
    stateName: 'पुडुचेरी',
    date: 'April 2026',
    seats: '30 सीटें',
    imageUrl: 'https://s7ap1.scene7.com/is/image/incredibleindia/arulmigu-manakula-vinayar-puducherry-1-attr-hero?qlt=82&ts=1726656271877',
  },
];

const ElectoralStates: React.FC = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      {/* Section Header */}
      <View style={styles.headerRow}>
        <View style={styles.titleContainer}>
          <View style={styles.indicator} />
          <Text style={styles.mainHeading}>चुनावी राज्य</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>सभी राज्य →</Text>
        </TouchableOpacity>
      </View>

      {/* Grid Container */}
      <View style={styles.gridContainer}>
        {ELECTION_DATA.map((item) => (
          <View key={item.id} style={styles.column}>
            <StateCard 
              item={item} 
              onPress={() => console.log(`Clicked: ${item.stateName}`)} 
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
   
    backgroundColor: '#fff',
    paddingVertical: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    width: 4,
    height: 22,
    backgroundColor: '#D32F2F',
    marginRight: 8,
  },
  mainHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  seeAllText: {
    color: '#D32F2F',
    fontSize: 14,
    fontWeight: '600',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // This enables the "side-by-side" grid
    paddingHorizontal: 10, // Slight padding to balance the columns
  },
  column: {
    width: '50%', // Half width for 2 cards per row
    paddingHorizontal: 6, // Space between columns
    marginBottom: 12, // Space between rows
  },
});

export default ElectoralStates;


//  if you want to slide the state then below code is for you but if you want to show the state in grid then use above code 


// import React from 'react';
// import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import StateCard, { ElectionState } from './StateCard';

// // Get screen width to calculate card size
// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.7; // Each card takes 70% of screen width

// export const ELECTION_DATA: ElectionState[] = [
//  {
//     id: '1',
//     stateName: 'पश्चिम बंगाल',
//     date: 'April 2026',
//     seats: '294 सीटें',
//     imageUrl: 'https://t4.ftcdn.net/jpg/03/68/05/51/360_F_368055107_Kjvi0bEEiks16S2ptIpRBDXkG4npMCCW.jpg',
//   },
//   {
//     id: '2',
//     stateName: 'तमिलनाडु',
//     date: 'April 2026',
//     seats: '234 सीटें',
//     imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=500',
//   },
//   {
//     id: '3',
//     stateName: 'असम',
//     date: 'April 2026',
//     seats: '126 सीटें',
//     imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMaWoYz5Qkrdr4AqTJN1fK6wslW4F4nPrbg&s',
//   },
//   {
//     id: '4',
//     stateName: 'केरल',
//     date: 'April 2026',
//     seats: '140 सीटें',
//     imageUrl: 'https://www.yoyotripsindia.com/images/state/3uXf6rLz6c/kerala-banner4.png',
//   },
//   {
//     id: '5',
//     stateName: 'पुडुचेरी',
//     date: 'April 2026',
//     seats: '30 सीटें',
//     imageUrl: 'https://s7ap1.scene7.com/is/image/incredibleindia/arulmigu-manakula-vinayar-puducherry-1-attr-hero?qlt=82&ts=1726656271877',
//   },
// ];


// const ElectoralStates: React.FC = () => {
//   return (
//     <View style={styles.mainContainer}>
//       {/* Section Header */}
//       <View style={styles.headerRow}>
//         <View style={styles.titleContainer}>
//           <View style={styles.indicator} />
//           <Text style={styles.mainHeading}>चुनावी राज्य</Text>
//         </View>
//         <TouchableOpacity>
//           <Text style={styles.seeAllText}>सभी राज्य →</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Horizontal Slider */}
//       <ScrollView 
//         horizontal 
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContainer}
//         // These props create the "snap-to-card" sliding effect
//         snapToInterval={CARD_WIDTH + 12} // Card width + margin
//         decelerationRate="fast"
//       >
//         {ELECTION_DATA.map((item) => (
//           <View key={item.id} style={styles.cardWrapper}>
//             <StateCard 
//               item={item} 
//               onPress={() => console.log(`Clicked: ${item.stateName}`)} 
//             />
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     backgroundColor: '#fff',
//     paddingVertical: 16,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     marginBottom: 16,
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   indicator: {
//     width: 4,
//     height: 22,
//     backgroundColor: '#D32F2F',
//     marginRight: 8,
//   },
//   mainHeading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#1a1a1a',
//   },
//   seeAllText: {
//     color: '#D32F2F',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   scrollContainer: {
//     paddingHorizontal: 16, // Padding at the start and end of the list
//   },
//   cardWrapper: {
//     width: CARD_WIDTH,
//     marginRight: 12, // Gap between cards
//   },
// });

// export default ElectoralStates;