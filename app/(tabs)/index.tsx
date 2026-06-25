import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAppTheme } from '@/context/ThemeContext';
import { useAppAuth } from '@/context/AuthContext';
import { DOA_DATA } from '@/constants/database';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 56) / 2; // Grid 2 kolom

export default function HomeScreen() {
  const { theme, colors } = useAppTheme();
  const { user } = useAppAuth();
  const [dailyDoa, setDailyDoa] = useState(DOA_DATA[0]);

  const namaUser = user ? user.username : 'Sahabat';

  useEffect(() => {
    // Ambil doa hari ini berdasarkan tanggal
    const day = new Date().getDate();
    const index = day % DOA_DATA.length;
    setDailyDoa(DOA_DATA[index]);
  }, []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.accent }]}>
        <View>
          <Text style={styles.greeting}>Assalamualaikum,</Text>
          <Text style={styles.username}>{namaUser}</Text>
        </View>
        <View style={[styles.avatarCircle, { backgroundColor: colors.background }]}>
          <Text style={[styles.avatarText, { color: colors.accent }]}>
            {namaUser.substring(0, 1).toUpperCase()}
          </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Card Doa Hari Ini */}
        <Text style={[styles.sectionTitle, { color: colors.textGreen }]}>Inspirasi Hari Ini</Text>
        <TouchableOpacity 
          style={[styles.dailyCard, { backgroundColor: colors.cardBackground, borderColor: colors.cardBorder }]}
          onPress={() => router.push(`/doa/${dailyDoa.id}` as any)}
          activeOpacity={0.9}
        >
          <View style={[styles.dailyBadge, { backgroundColor: colors.accent }]}>
            <Ionicons name="sparkles" size={14} color="#ffffff" style={styles.dailyBadgeIcon} />
            <Text style={styles.dailyBadgeText}>DOA HARI INI</Text>
          </View>
          <Text style={[styles.dailyTitle, { color: colors.text }]}>{dailyDoa.title}</Text>
          <Text style={[styles.dailyArab, { color: colors.text }]} numberOfLines={1}>
            {dailyDoa.arab}
          </Text>
          <Text style={[styles.dailyTranslation, { color: colors.textMuted }]} numberOfLines={2}>
            "{dailyDoa.translation}"
          </Text>
          <View style={[styles.readMoreRow, { borderTopColor: colors.border }]}>
            <Text style={[styles.readMoreText, { color: colors.accent }]}>Baca Selengkapnya</Text>
            <Ionicons name="arrow-forward" size={16} color={colors.accent} />
          </View>
        </TouchableOpacity>

        {/* Menu Eksplorasi Grid */}
        <Text style={[styles.sectionTitle, { color: colors.textGreen, marginTop: 10 }]}>Menu Eksplorasi</Text>
        <View style={styles.menuContainer}>
          {/* Menu Kumpulan Hadist */}
          <TouchableOpacity 
            style={[styles.menuItem, { backgroundColor: colors.cardBackground, borderColor: colors.cardBorder }]} 
            onPress={() => router.push('/hadits' as any)}
            activeOpacity={0.8}
          >
            <View style={[styles.iconContainer, { backgroundColor: theme === 'dark' ? 'rgba(22, 163, 74, 0.1)' : '#dcfce7' }]}>
              <Ionicons name="book" size={32} color={theme === 'dark' ? '#4ade80' : '#16a34a'} />
            </View>
            <Text style={[styles.menuText, { color: colors.textMuted }]}>Kumpulan</Text>
            <Text style={[styles.menuTextBold, { color: colors.text }]}>Hadits</Text>
          </TouchableOpacity>

          {/* Menu Kumpulan Doa */}
          <TouchableOpacity 
            style={[styles.menuItem, { backgroundColor: colors.cardBackground, borderColor: colors.cardBorder }]} 
            onPress={() => router.push('/doa' as any)}
            activeOpacity={0.8}
          >
            <View style={[styles.iconContainer, { backgroundColor: theme === 'dark' ? 'rgba(14, 165, 233, 0.1)' : '#e0f2fe' }]}>
              <Ionicons name="moon" size={32} color={theme === 'dark' ? '#38bdf8' : '#0ea5e9'} />
            </View>
            <Text style={[styles.menuText, { color: colors.textMuted }]}>Kumpulan</Text>
            <Text style={[styles.menuTextBold, { color: colors.text }]}>Doa</Text>
          </TouchableOpacity>

          {/* Menu Tentang Pembuat */}
          <TouchableOpacity 
            style={[styles.menuItem, { backgroundColor: colors.cardBackground, borderColor: colors.cardBorder }]} 
            onPress={() => router.push('/tentang' as any)}
            activeOpacity={0.8}
          >
            <View style={[styles.iconContainer, { backgroundColor: theme === 'dark' ? 'rgba(217, 119, 6, 0.1)' : '#fef3c7' }]}>
              <Ionicons name="information-circle" size={32} color={theme === 'dark' ? '#fbbf24' : '#d97706'} />
            </View>
            <Text style={[styles.menuText, { color: colors.textMuted }]}>Tentang</Text>
            <Text style={[styles.menuTextBold, { color: colors.text }]}>Pembuat</Text>
          </TouchableOpacity>

          {/* Menu Pengaturan */}
          <TouchableOpacity 
            style={[styles.menuItem, { backgroundColor: colors.cardBackground, borderColor: colors.cardBorder }]} 
            onPress={() => router.push('/settings' as any)}
            activeOpacity={0.8}
          >
            <View style={[styles.iconContainer, { backgroundColor: theme === 'dark' ? 'rgba(16, 185, 129, 0.1)' : '#d1fae5' }]}>
              <Ionicons name="settings" size={32} color={colors.accent} />
            </View>
            <Text style={[styles.menuText, { color: colors.textMuted }]}>Pengaturan</Text>
            <Text style={[styles.menuTextBold, { color: colors.text }]}>Aplikasi</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: 48,
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
  },
  scrollContent: {
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    marginTop: 24,
    marginLeft: 24,
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  dailyCard: {
    marginHorizontal: 20,
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  dailyBadge: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 12,
  },
  dailyBadgeIcon: {
    marginRight: 4,
  },
  dailyBadgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  dailyTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },
  dailyArab: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    lineHeight: 30,
  },
  dailyTranslation: {
    fontSize: 14,
    fontStyle: 'italic',
    lineHeight: 20,
    marginBottom: 16,
  },
  readMoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    paddingTop: 12,
  },
  readMoreText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 16,
    justifyContent: 'space-between',
  },
  menuItem: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH * 1.15,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
    padding: 12,
    borderWidth: 1,
  },
  iconContainer: {
    padding: 16,
    borderRadius: 100,
    marginBottom: 16,
  },
  menuText: {
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
  menuTextBold: {
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 2,
  },
});
