import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Svg, { G, Line, Path } from 'react-native-svg';

export interface PartyData {
  name: string;
  seats: number;
  previous: number;
  change: string;
  color: string;
  logo: any; // Using local require or URI
}

export interface ElectionResult {
  id: string;
  state: string;
  totalSeats: number;
  majority: number;
  parties: PartyData[];
}

const ResultCard: React.FC<{ data: ElectionResult }> = ({ data }) => {
  const RADIUS = 70;
  const CIRCUMFERENCE = Math.PI * RADIUS; // Half circle circumference

  let currentOffset = 0;

  return (
    <View style={styles.card}>
      {/* Top Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.stateTitle}>{data.state} - लाइव रुझान</Text>
          <Text style={styles.totalSeats}>कुल सीटें: {data.totalSeats}</Text>
        </View>
        <View style={styles.majorityBox}>
          <Text style={styles.majorityNumber}>{data.majority}</Text>
          <Text style={styles.majorityText}>बहुमत</Text>
        </View>
      </View>

      {/* Dynamic Gauge Chart */}
      <View style={styles.chartContainer}>
        <Svg width="220" height="120" viewBox="0 0 200 110">
          <G transform="translate(100, 100)">
            {/* Background Gray Arc */}
            <Path
              d={`M -${RADIUS} 0 A ${RADIUS} ${RADIUS} 0 0 1 ${RADIUS} 0`}
              fill="none"
              stroke="#63ceff"
              strokeWidth="25"
            />

            {/* Dynamic Colored Segments */}
            {data.parties.map((party, index) => {
              const strokeDash = (party.seats / data.totalSeats) * CIRCUMFERENCE;
              const strokeOffset = CIRCUMFERENCE - currentOffset;
              currentOffset += strokeDash;

              return (
                <Path
                  key={index}
                  d={`M -${RADIUS} 0 A ${RADIUS} ${RADIUS} 0 0 1 ${RADIUS} 0`}
                  fill="none"
                  stroke={party.color}
                  strokeWidth="25"
                  strokeDasharray={`${strokeDash} ${CIRCUMFERENCE}`}
                  strokeDashoffset={strokeOffset}
                />
              );
            })}

            {/* Majority Needle (Dashed Line) */}
            <Line
              x1="0" y1="0"
              x2="0" y2="-85"
              stroke="#333"
              strokeWidth="1.5"
              strokeDasharray="4 2"
            />
          </G>
        </Svg>
      </View>

      {/* Table Header - FIXED ALIGNMENT */}
      <View style={styles.tableHeaderRow}>
        <Text style={[styles.colHeader, { flex: 2.5, textAlign: 'left' }]}>गठबंधन</Text>
        <Text style={styles.colHeader}>रुझान</Text>
        <Text style={styles.colHeader}>पिछला</Text>
        <Text style={styles.colHeader}>बदलाव</Text>
      </View>

      {/* Party Rows */}
      {data.parties.map((party, index) => (
        <View key={index} style={styles.partyRow}>
          <View style={styles.partyInfo}>
            <Image source={party.logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.partyName}>{party.name}</Text>
          </View>
          <Text style={styles.seatCount}>{party.seats}</Text>
          <Text style={styles.prevCount}>{party.previous}</Text>
          <Text style={[styles.changeCount, { color: party.change.startsWith('+') ? '#2E7D32' : '#eb2323' }]}>
            {party.change}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    padding: 20,
    margin: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  stateTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#000',
  },
  totalSeats: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    fontWeight: '600',
  },
  majorityBox: {
    alignItems: 'center',
  },
  majorityNumber: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF3B30',
  },
  majorityText: {
    fontSize: 12,
    color: '#8E8E93',
    fontWeight: 'bold',
  },
  chartContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
    paddingBottom: 8,
    marginTop: 10,
  },
  colHeader: {
    flex: 1,
    textAlign: 'right',
    fontSize: 12,
    color: '#AEAEB2',
    fontWeight: 'bold',
  },
  partyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  partyInfo: {
    flex: 2.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  partyName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  seatCount: {
    flex: 1,
    textAlign: 'right',
    fontSize: 15,
    fontWeight: '900',
  },
  prevCount: {
    flex: 1,
    textAlign: 'right',
    fontSize: 15,
    color: '#000',
  },
  changeCount: {
    flex: 1,
    textAlign: 'right',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ResultCard;



//if you want see this component 2 by 2 on sceen then use bleow code 

// import React from 'react';
// import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
// import Svg, { G, Line, Path } from 'react-native-svg';

// const { width } = Dimensions.get('window');

// // --- Restored Interfaces ---
// export interface PartyData {
//   name: string;
//   seats: number;
//   previous: number;
//   change: string;
//   color: string;
//   logo: any; 
// }

// export interface ElectionResult {
//   id: string;
//   state: string;
//   totalSeats: number;
//   majority: number;
//   parties: PartyData[];
// }

// interface ResultCardProps {
//   data: ElectionResult; // Strictly typed
//   isFullWidth?: boolean;
// }

// const ResultCard: React.FC<ResultCardProps> = ({ data, isFullWidth }) => {
//   const cardWidth = isFullWidth ? (width - 20) : (width / 2) - 15;
  
//   const RADIUS = isFullWidth ? 65 : 45; 
//   const CIRCUMFERENCE = Math.PI * RADIUS;
//   let currentOffset = 0;

//   return (
//     <View style={[styles.card, { width: cardWidth }]}>
//       {/* Header Area */}
//       <View style={styles.header}>
//         <Text style={styles.stateTitle} numberOfLines={1}>{data.state}</Text>
//         <View style={styles.rowBetween}>
//           <Text style={styles.totalSeats}>कुल सीटें: {data.totalSeats}</Text>
//           <View style={styles.majorityBox}>
//             <Text style={styles.majorityNumber}>{data.majority}</Text>
//             <Text style={styles.majorityText}>बहुमत</Text>
//           </View>
//         </View>
//       </View>

//       {/* Chart - Scaled based on width */}
//       <View style={styles.chartContainer}>
//         <Svg width={cardWidth * 0.8} height={isFullWidth ? 80 : 55} viewBox={`0 0 140 ${isFullWidth ? 80 : 70}`}>
//           <G transform={`translate(70, ${isFullWidth ? 75 : 65})`}>
//             <Path
//               d={`M -${RADIUS} 0 A ${RADIUS} ${RADIUS} 0 0 1 ${RADIUS} 0`}
//               fill="none"
//               stroke="#63ceff"
//               strokeWidth={isFullWidth ? 22 : 15}
//             />
//             {data.parties.map((party, index) => {
//               const strokeDash = (party.seats / data.totalSeats) * CIRCUMFERENCE;
//               const strokeOffset = CIRCUMFERENCE - currentOffset;
//               currentOffset += strokeDash;
//               return (
//                 <Path
//                   key={index}
//                   d={`M -${RADIUS} 0 A ${RADIUS} ${RADIUS} 0 0 1 ${RADIUS} 0`}
//                   fill="none"
//                   stroke={party.color}
//                   strokeWidth={isFullWidth ? 22 : 15}
//                   strokeDasharray={`${strokeDash} ${CIRCUMFERENCE}`}
//                   strokeDashoffset={strokeOffset}
//                 />
//               );
//             })}
//             <Line x1="0" y1="0" x2="0" y2={isFullWidth ? -75 : -55} stroke="#333" strokeWidth="1.5" strokeDasharray="3 2" />
//           </G>
//         </Svg>
//       </View>

//       {/* Table Header */}
//       <View style={styles.tableHeaderRow}>
//         <Text style={[styles.colHeader, { flex: 2.2, textAlign: 'left' }]}>गठबंधन</Text>
//         <Text style={styles.colHeader}>रुझान</Text>
//         <Text style={styles.colHeader}>पिछला</Text>
//         <Text style={styles.colHeader}>बदलाव</Text>
//       </View>

//       {/* Party Rows */}
//       {data.parties.map((party, index) => (
//         <View key={index} style={styles.partyRow}>
//           <View style={styles.partyInfo}>
//             <Image source={party.logo} style={styles.logo} />
//             <Text style={styles.partyName} numberOfLines={1}>{party.name}</Text>
//           </View>
          
//           <Text style={styles.seatCount}>{party.seats}</Text>
//           <Text style={styles.prevCount}>{party.previous}</Text>
          
//           <View style={styles.changeWrapper}>
//              <Text style={[styles.changeCount, { color: party.change.startsWith('+') ? '#2E7D32' : '#eb2323' }]}>
//                {party.change}
//              </Text>
//           </View>
//         </View>
//       ))}
//     </View>
//   );
// };

// // ... Styles remain the same as your previous version ...
// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#FFF',
//     borderRadius: 12,
//     padding: 12,
//     margin: 5,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     borderWidth: 1,
//     borderColor: '#EFEFEF',
//   },
//   header: {
//     marginBottom: 5,
//   },
//   rowBetween: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   stateTitle: {
//     fontSize: 16,
//     fontWeight: '900',
//     color: '#000',
//   },
//   totalSeats: {
//     fontSize: 10,
//     color: '#666',
//     fontWeight: 'bold',
//   },
//   majorityBox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F9F9F9',
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//     borderRadius: 4,
//   },
//   majorityNumber: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#FF3B30',
//   },
//   majorityText: {
//     fontSize: 8,
//     color: '#8E8E93',
//     marginLeft: 2,
//     fontWeight: 'bold',
//   },
//   chartContainer: {
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   tableHeaderRow: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#F2F2F7',
//     paddingBottom: 4,
//     marginBottom: 4,
//   },
//   colHeader: {
//     flex: 1,
//     textAlign: 'right',
//     fontSize: 9,
//     color: '#AEAEB2',
//     fontWeight: '800',
//   },
//   partyRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 7,
//     borderBottomWidth: 0.5,
//     borderBottomColor: '#F0F0F0',
//   },
//   partyInfo: {
//     flex: 2.2,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 14,
//     height: 14,
//     marginRight: 4,
//   },
//   partyName: {
//     fontSize: 11,
//     fontWeight: 'bold',
//     color: '#1A1A1A',
//   },
//   seatCount: {
//     flex: 1,
//     textAlign: 'right',
//     fontSize: 13,
//     fontWeight: '900',
//     color: '#000',
//   },
//   prevCount: {
//     flex: 1,
//     textAlign: 'right',
//     fontSize: 11,
//     color: '#8E8E93',
//     fontWeight: '600',
//   },
//   changeWrapper: {
//     flex: 1,
//     alignItems: 'flex-end',
//   },
//   changeCount: {
//     fontSize: 10,
//     fontWeight: 'bold',
//     textAlign: 'right',
//   },
// });

// export default ResultCard;