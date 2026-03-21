
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export interface ElectionState {
  id: string;
  stateName: string;
  date: string;
  seats: string;
  imageUrl: string;
}

interface StateCardProps {
  item: ElectionState;
  onPress?: () => void;
}

const StateCard: React.FC<StateCardProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer} onPress={onPress}>
      <ImageBackground
        source={{ uri: item.imageUrl }}
        style={styles.imageBg}
        imageStyle={{ borderRadius: 12 }}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={styles.gradient}
        >
          <Text style={styles.stateText} numberOfLines={1}>
            {item.stateName}
          </Text>
          
          <View style={styles.infoRow}>
            <View style={styles.iconGroup}>
              <MaterialCommunityIcons name="calendar-month" size={12} color="#FF4D4D" />
              <Text style={styles.infoText}>{item.date}</Text>
            </View>
            
            <View style={styles.iconGroup}>
              <MaterialCommunityIcons name="view-grid-outline" size={12} color="#FF4D4D" />
              <Text style={styles.infoText}>{item.seats}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%', // Fills the parent's grid column
    height: 140,
    borderRadius: 12,
    backgroundColor: '#eee',
    // Elevation/Shadow
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  imageBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gradient: {
    padding: 10,
    height: '70%',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  stateText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  infoRow: {
    flexDirection: 'column', // Stacked for narrow grid cards
    gap: 2,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    color: '#fff',
    fontSize: 10,
    marginLeft: 4,
    fontWeight: '600',
  },
});

export default StateCard;