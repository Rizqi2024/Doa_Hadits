import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions, ActivityIndicator } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 64) / 2; // Grid 2 kolom

export default function HomeScreen() {
  const { user } = useLocalSearchParams();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const namaUser = user ? user.toString() : 'Sahabat';

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      setIsLoggingOut(false);
      router.replace('/login');
    }, 1500); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Assalamualaikum,</Text>
          <Text style={styles.username}>{namaUser}</Text>
        </View>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>{namaUser.substring(0, 1).toUpperCase()}</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Eksplorasi</Text>

      <View style={styles.menuContainer}>
        {/* Menu Kumpulan Hadist */}
        <TouchableOpacity 
          style={[styles.menuItem, { backgroundColor: '#ffffff' }]} 
          onPress={() => router.push('/hadits')}
          activeOpacity={0.8}
        >
          <View style={[styles.iconContainer, { backgroundColor: '#dcfce7' }]}>
            <Ionicons name="book-outline" size={36} color="#16a34a" />
          </View>
          <Text style={styles.menuText}>Kumpulan</Text>
          <Text style={styles.menuTextBold}>Hadits</Text>
        </TouchableOpacity>

        {/* Menu Kumpulan Doa */}
        <TouchableOpacity 
          style={[styles.menuItem, { backgroundColor: '#ffffff' }]} 
          onPress={() => router.push('/doa')}
          activeOpacity={0.8}
        >
          <View style={[styles.iconContainer, { backgroundColor: '#dcfce7' }]}>
            <Ionicons name="moon-outline" size={36} color="#0ea5e9" />
          </View>
          <Text style={styles.menuText}>Kumpulan</Text>
          <Text style={styles.menuTextBold}>Doa</Text>
        </TouchableOpacity>

        {/* Menu Tentang Pembuat */}
        <TouchableOpacity 
          style={[styles.menuItem, { backgroundColor: '#ffffff' }]} 
          onPress={() => router.push('/tentang')}
          activeOpacity={0.8}
        >
          <View style={[styles.iconContainer, { backgroundColor: '#fef3c7' }]}>
            <Ionicons name="information-circle-outline" size={36} color="#d97706" />
          </View>
          <Text style={styles.menuText}>Tentang</Text>
          <Text style={styles.menuTextBold}>Pembuat</Text>
        </TouchableOpacity>

        {/* Menu Logout */}
        <TouchableOpacity 
          style={[styles.menuItem, { backgroundColor: '#ffffff' }]} 
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          {isLoggingOut ? (
             <ActivityIndicator color="#10b981" size="large" />
          ) : (
            <>
              <View style={[styles.iconContainer, { backgroundColor: '#ffe4e6' }]}>
                <Ionicons name="log-out-outline" size={36} color="#e11d48" />
              </View>
              <Text style={styles.menuText}>Keluar</Text>
              <Text style={[styles.menuTextBold, { color: '#e11d48' }]}>Akun</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4', // Hijau muda cerah
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: 48,
    backgroundColor: '#059669', // Emerald keras
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  greeting: {
    fontSize: 16,
    color: '#d1fae5',
    marginBottom: 6,
    fontWeight: '500',
  },
  username: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  avatarCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  avatarText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#059669',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#064e3b',
    marginTop: 28,
    marginLeft: 24,
    marginBottom: 10,
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    gap: 16,
    justifyContent: 'space-between',
    alignContent: 'flex-start',
  },
  menuItem: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH * 1.15,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#166534',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ecfdf5',
  },
  iconContainer: {
    padding: 16,
    borderRadius: 100,
    marginBottom: 20,
  },
  menuText: {
    color: '#64748b',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
  menuTextBold: {
    color: '#064e3b',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
});
