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

      {/* Table Header */}
      <View style={styles.tableHeaderRow}>
        <Text style={[styles.colHeader, { flex: 2.5 }]}>गठबंधन</Text>
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
    // Professional Shadow
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