import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAppTheme } from '@/context/ThemeContext';

export default function TentangScreen() {
  const { theme, colors } = useAppTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen 
        options={{ 
          title: 'Tentang Pembuat', 
          headerShown: true,
          headerBackTitle: 'Kembali', 
          headerStyle: { backgroundColor: colors.accent }, 
          headerTintColor: '#fff' 
        }} 
      />
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

        <View style={[styles.headerBackground, { backgroundColor: colors.accent }]} />

        <View style={[styles.card, { backgroundColor: colors.cardBackground, borderColor: colors.cardBorder }]}>
          <Image
            source={require('@/assets/images/logoApp.png')}
            style={[styles.avatar, { borderColor: theme === 'dark' ? colors.accent : '#34d399' }]}
          />
          <Text style={[styles.name, { color: theme === 'dark' ? colors.text : '#064e3b' }]}>
            Rizqi Nurfadilah (202407002)
          </Text>
          <View style={[styles.badge, { backgroundColor: theme === 'dark' ? 'rgba(16, 185, 129, 0.1)' : '#dcfce7' }]}>
            <Text style={[styles.role, { color: colors.accent }]}>Junior Developer App</Text>
          </View>

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <Text style={[styles.description, { color: colors.textMuted }]}>
            Aplikasi Hadist & Doa ini dikembangkan untuk memenuhi kriteria tugas proyek Ujian Akhir Semester (UAS). 
            Aplikasi dibangun menggunakan teknologi React Native dengan Expo Router. 
            Mendukung autentikasi pengguna secara dinamis, penyesuaian ukuran font, pemutar audio lafal Arab, 
            serta tema gelap (Emerald Dark Mode) yang didesain secara glassmorphic.
          </Text>

          <View style={[styles.infoContainer, { backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.01)' : '#f8fafc', borderColor: colors.border }]}>
            <View style={[styles.infoRow, { borderBottomColor: colors.border }]}>
              <View style={styles.infoRowLeft}>
                <Ionicons name="code-slash" size={20} color={colors.accent} />
                <Text style={[styles.infoLabel, { color: colors.textMuted }]}>Teknologi</Text>
              </View>
              <Text style={[styles.infoValue, { color: colors.text }]}>RN, Expo, TS</Text>
            </View>

            <View style={[styles.infoRow, { borderBottomColor: colors.border }]}>
              <View style={styles.infoRowLeft}>
                <Ionicons name="layers" size={20} color={colors.accent} />
                <Text style={[styles.infoLabel, { color: colors.textMuted }]}>Versi</Text>
              </View>
              <Text style={[styles.infoValue, { color: colors.text }]}>2.0.0 (UAS Edition)</Text>
            </View>

            <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
              <View style={styles.infoRowLeft}>
                <Ionicons name="checkmark-circle" size={20} color={colors.accent} />
                <Text style={[styles.infoLabel, { color: colors.textMuted }]}>Status Proyek</Text>
              </View>
              <Text style={[styles.infoValue, { color: colors.accent }]}>Selesai (UAS)</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 140,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  scrollContainer: {
    padding: 24,
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  card: {
    width: '100%',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 8,
    borderWidth: 1,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#ffffff',
    marginBottom: 16,
    borderWidth: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8,
    textAlign: 'center',
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  role: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  divider: {
    width: '100%',
    height: 1,
    marginVertical: 24,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  infoContainer: {
    width: '100%',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  infoRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 8,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

