import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All News', 'Army', 'Navy', 'Air Force', 'Intelligence', 'Cyber', 'Space'];

  return (
    <View style={styles.container}>
      
      {/* --- TOP HEADER ROW (Always Visible) --- */}
      <View style={styles.headerRow}>
        
        {/* Left Side: Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoBox}>
            <Text style={styles.logoW}>W</Text>
          </View>
          <Text style={styles.logoText}>WORLD91</Text>
        </View>

        {/* Right Side: Icons */}
        <View style={styles.iconGroup}>
          
          {/* 1. MAGIC HAPPENS HERE: Search Icon only shows if search is NOT active */}
          {!isSearchActive && (
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={() => setIsSearchActive(true)} 
            >
              <Ionicons name="search" size={24} color="#8A94A6" />
            </TouchableOpacity>
          )}

          {/* Hamburger Menu Icon */}
          <TouchableOpacity 
            style={styles.iconButton} 
            onPress={() => setIsDrawerOpen(true)} 
          >
            <Ionicons name="menu" size={28} color="white" />
          </TouchableOpacity>
        </View>

      </View>

      {/* --- DROPDOWN SEARCH BAR --- */}
      {isSearchActive && (
        <View style={styles.activeSearchContainer}>
          <Ionicons name="search" size={16} color="#8A94A6" style={styles.searchIconInside} />
          
          <TextInput
            style={[styles.searchInput, { outlineStyle: 'none' } as any]} 
            placeholder="Search . . ."
            placeholderTextColor="#8A94A6"
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoFocus={true} 
            selectionColor="#E53935" 
          />
          
          <TouchableOpacity 
            onPress={() => {
              setIsSearchActive(false); 
              setSearchQuery(''); 
            }}
            style={styles.closeSearchButton}
          >
            <Ionicons name="close-circle" size={25} color="#8A94A6" />
          </TouchableOpacity>
        </View>
      )}

      {/* --- SLIDE OUT DRAWER (MODAL) --- */}
      <Modal
        visible={isDrawerOpen}
        animationType="fade" 
        transparent={true} 
        onRequestClose={() => setIsDrawerOpen(false)} 
      >
        <View style={styles.modalOverlay}>
          
          <TouchableOpacity 
            style={styles.closeArea} 
            onPress={() => setIsDrawerOpen(false)} 
            activeOpacity={1}
          />

          <View style={styles.drawerMenu}>
            <View style={styles.drawerHeader}>
              <Text style={styles.drawerTitle}>CATEGORIES</Text>
              <TouchableOpacity onPress={() => setIsDrawerOpen(false)}>
                <Ionicons name="close" size={28} color="white" />
              </TouchableOpacity>
            </View>

            {categories.map((cat, index) => (
              <TouchableOpacity key={index} style={styles.drawerItem}>
                <Text style={styles.drawerItemText}>{cat}</Text>
                <Ionicons name="chevron-forward" size={16} color="#8A94A6" />
              </TouchableOpacity>
            ))}
          </View>

        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0B1021',
    paddingHorizontal: 16,
    paddingTop: 20, 
    paddingBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 38, 
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBox: {
    backgroundColor: '#E53935',
    width: 28,
    height: 28,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  logoW: {
    color: 'white',
    fontWeight: 'bold', 
    fontSize: 16, 
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16, 
  },

  // --- DROPDOWN SEARCH BAR STYLES ---
  activeSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#151A2C', 
    borderRadius: 20, 
    paddingHorizontal: 12,
    height: 38, 
    borderWidth: 1,
    borderColor: '#2C344A', 
    marginTop: 16, 
  },
  searchIconInside: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 14, 
    paddingVertical: 0, 
    height: '100%',
  },
  closeSearchButton: {
    padding: 4,
    marginLeft: 4,
  },

  // --- DRAWER STYLES ---
  modalOverlay: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.6)', 
  },
  closeArea: {
    flex: 1, 
  },
  drawerMenu: {
    width: 250, 
    backgroundColor: '#1E253A', 
    height: '100%',
    paddingTop: 50,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: -5, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#2C344A',
    paddingBottom: 15,
  },
  drawerTitle: {
    color: '#8A94A6',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  drawerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2C344A', 
  },
  drawerItemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});