import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const MENU_HADITS = [
  { id: '1', title: 'Hadits Niat', route: '/hadits/niat', icon: 'heart' },
  { id: '2', title: 'Hadits Menuntut Ilmu', route: '/hadits/menuntutIlmu', icon: 'school' },
  { id: '3', title: 'Hadits Kebersihan', route: '/hadits/kebersihan', icon: 'water' },
  { id: '4', title: 'Hadits Kasih Sayang', route: '/hadits/kasihSayang', icon: 'people' },
];

export default function HaditsListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Kumpulan Hadits', headerBackTitle: 'Kembali', headerStyle: { backgroundColor: '#059669' }, headerTintColor: '#fff' }} />
      <View style={styles.listContainer}>
        {MENU_HADITS.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.card} 
            onPress={() => router.push(item.route as any)}
            activeOpacity={0.7}
          >
            <View style={styles.cardLeft}>
              <View style={styles.iconContainer}>
                 <Ionicons name={item.icon as any} size={24} color="#059669" />
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#cbd5e1" />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0fdf4' },
  listContainer: { padding: 20 },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 16,
    shadowColor: '#166534',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#16a34a', // Hijau u/ Hadits
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f0fdf4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardTitle: { fontSize: 17, fontWeight: '700', color: '#0f172a' },
});
