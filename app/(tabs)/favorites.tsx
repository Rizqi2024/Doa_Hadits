import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '@/context/FavoritesContext';
import { useAppTheme } from '@/context/ThemeContext';
import { DOA_DATA, HADITS_DATA } from '@/constants/database';

export default function FavoritesScreen() {
  const { favorites } = useFavorites();
  const { theme, colors } = useAppTheme();
  const [activeTab, setActiveTab] = useState<'doa' | 'hadits'>('doa');

  const favoriteDoas = DOA_DATA.filter((item) => favorites.includes(item.id));
  const favoriteHadits = HADITS_DATA.filter((item) => favorites.includes(item.id));

  const renderItem = ({ item, type }: { item: any; type: 'doa' | 'hadits' }) => {
    const route = type === 'doa' ? `/doa/${item.id}` : `/hadits/${item.id}`;
    const borderLeftColor = type === 'doa' ? '#0ea5e9' : '#16a34a';

    return (
      <TouchableOpacity 
        style={[styles.card, { backgroundColor: colors.cardBackground, borderColor: colors.cardBorder, borderLeftColor }]} 
        onPress={() => router.push(route as any)}
        activeOpacity={0.7}
      >
        <View style={styles.cardLeft}>
          <View style={[styles.iconContainer, { backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.02)' : '#f0fdf4' }]}>
            <Ionicons name={item.icon as any} size={22} color={colors.accent} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.cardTitle, { color: colors.text }]} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={[styles.cardExcerpt, { color: colors.textMuted }]} numberOfLines={1}>
              {item.translation}
            </Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
      </TouchableOpacity>
    );
  };

  const currentData = (activeTab === 'doa' ? favoriteDoas : favoriteHadits) as any[];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.accent }]}>
        <Text style={styles.headerTitle}>Favorit Anda</Text>
        <Text style={[styles.headerSubtitle, { color: theme === 'dark' ? colors.textGreen : '#d1fae5' }]}>
          Koleksi bacaan tersimpan
        </Text>
      </View>

      {/* Segmented Control */}
      <View style={[styles.tabSelectorContainer, { backgroundColor: theme === 'dark' ? '#0a1410' : '#f1f5f9' }]}>
        <TouchableOpacity
          style={[
            styles.tabSelectorButton,
            activeTab === 'doa' && [styles.tabSelectorActiveButton, { backgroundColor: colors.accent }]
          ]}
          onPress={() => setActiveTab('doa')}
        >
          <Ionicons name="moon-outline" size={18} color={activeTab === 'doa' ? '#ffffff' : colors.textMuted} style={styles.tabIcon} />
          <Text style={[styles.tabSelectorText, { color: activeTab === 'doa' ? '#ffffff' : colors.text }]}>Doa</Text>
          {favoriteDoas.length > 0 && (
            <View style={[styles.badge, { backgroundColor: activeTab === 'doa' ? '#ffffff' : colors.accent }]}>
              <Text style={[styles.badgeText, { color: activeTab === 'doa' ? colors.accent : '#ffffff' }]}>{favoriteDoas.length}</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabSelectorButton,
            activeTab === 'hadits' && [styles.tabSelectorActiveButton, { backgroundColor: colors.accent }]
          ]}
          onPress={() => setActiveTab('hadits')}
        >
          <Ionicons name="book-outline" size={18} color={activeTab === 'hadits' ? '#ffffff' : colors.textMuted} style={styles.tabIcon} />
          <Text style={[styles.tabSelectorText, { color: activeTab === 'hadits' ? '#ffffff' : colors.text }]}>Hadits</Text>
          {favoriteHadits.length > 0 && (
            <View style={[styles.badge, { backgroundColor: activeTab === 'hadits' ? '#ffffff' : colors.accent }]}>
              <Text style={[styles.badgeText, { color: activeTab === 'hadits' ? colors.accent : '#ffffff' }]}>{favoriteHadits.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* List */}
      <FlatList
        data={currentData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem({ item, type: activeTab })}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <View style={[styles.emptyIconContainer, { backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.02)' : '#e2e8f0' }]}>
              <Ionicons 
                name={activeTab === 'doa' ? "bookmark-outline" : "book-outline"} 
                size={64} 
                color={colors.accent} 
              />
            </View>
            <Text style={[styles.emptyTitle, { color: colors.text }]}>Belum ada Favorit</Text>
            <Text style={[styles.emptySubtitle, { color: colors.textMuted }]}>
              Buka {activeTab === 'doa' ? 'kumpulan doa' : 'kumpulan hadits'} dan tekan tombol bintang/bookmark di pojok kanan atas untuk menyimpan.
            </Text>
            <TouchableOpacity 
              style={[styles.exploreButton, { backgroundColor: colors.accent }]}
              onPress={() => router.push((activeTab === 'doa' ? '/doa' : '/hadits') as any)}
            >
              <Text style={styles.exploreButtonText}>Mulai Eksplorasi</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 24,
    paddingTop: 48,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  tabSelectorContainer: {
    flexDirection: 'row',
    margin: 20,
    padding: 4,
    borderRadius: 14,
  },
  tabSelectorButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 10,
  },
  tabSelectorActiveButton: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tabIcon: {
    marginRight: 6,
  },
  tabSelectorText: {
    fontSize: 15,
    fontWeight: '700',
  },
  badge: {
    marginLeft: 6,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 20,
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderLeftWidth: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  cardExcerpt: {
    fontSize: 13,
    marginTop: 4,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  emptyIconContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  exploreButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  exploreButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
