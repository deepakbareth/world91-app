import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import the new gradient!

export default function FeaturedCard() {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        // Point this to your local transparent PNG image!
        source={require('../../assets/images/Gradient.png')} 
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 16 }}
      >
        {/* This gradient fades from perfectly clear at the top to dark at the bottom */}
        <LinearGradient
          colors={['transparent', 'rgba(11, 16, 33, 0.95)']} // Matches your app's dark background
          locations={[0.2, 1]} // Starts fading lower down the card
          style={styles.overlay}
        >
          
          {/* TOP: Red Breaking Badge */}
          <View style={styles.badgeContainer}>
            <View style={styles.badgeDot} />
            <Text style={styles.badgeText}>BREAKING</Text>
          </View>

          {/* BOTTOM: News Info */}
          <View style={styles.bottomContent}>
            <View style={styles.metaRow}>
              <Text style={styles.categoryText}>AIR FORCE</Text>
              <Text style={styles.timeText}>  •  12m ago</Text>
            </View>
            <Text style={styles.titleText}>
              X-59 Quiet Supersonic Jet Completes First Flight Test in Palmdale
            </Text>
          </View>

        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    height: 230,
    borderRadius: 16,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#E53935', // THIS is the magic! The red sits behind your transparent PNG.
    borderRadius: 16,
  },
  overlay: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'space-between', 
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e7cece',
    alignSelf: 'flex-start', 
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#309910',
    marginRight: 6,
  },
  badgeText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  bottomContent: {
    justifyContent: 'flex-end',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryText: {
    color: '#e70eca',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  timeText: {
    color: '#5993ff', 
    fontSize: 12,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 26,
  },
});