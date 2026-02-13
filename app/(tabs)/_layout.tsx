import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

// 1. Import your custom Header component
import Header from '../../components/ui/Header'; 

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true, // 2. Change this from false to true!
        header: () => <Header />, // 3. Tell Expo to use your custom Header here
        tabBarStyle: {
          backgroundColor: '#0B1021',
          borderTopWidth: 1,
          borderTopColor: '#1E253A', // Subtle horizontal line above the tabs
          height: 70,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: '#E53935',
        tabBarInactiveTintColor: '#6B7280',
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: 'bold',
          textTransform: 'uppercase', // Matches design text style
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={22} color={color} />
        }}
      />
      <Tabs.Screen
        name="shorts"
        options={{
          title: 'Shorts',
          tabBarIcon: ({ color }) => <Ionicons name="play-circle-outline" size={27} color={color} />
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: '',
          tabBarIcon: () => (
            <View style={{
              backgroundColor: '#E53935', // Red from design
              width: 45,
              height: 45,
              borderRadius: 12, // Rounded corners as seen in image_b1e6f6.png
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 5, // Adjust vertical alignment
              // Optional: matching the subtle glow/shadow in the image
              shadowColor: '#E53935',
              shadowOffset: { width: 0, height: 7 },
              shadowOpacity: 0.7,
              shadowRadius: 5,
              elevation: 7,
            }}>
              <Ionicons name="add" size={30} color="white" />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="subscribed"
        options={{
          title: 'Subscribed',
          tabBarIcon: ({ color, size }) => (
            <Image 
              source={require('../../assets/images/subscribed-icon.png')} 
              style={{ 
                width: 22, 
                height: 22, 
                tintColor: color 
              }} 
              resizeMode="contain"
            />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={22} color={color} />
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  addBtn: {
    backgroundColor: '#E53935',
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // Centers it in the bar
    shadowColor: '#E53935',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  }
});