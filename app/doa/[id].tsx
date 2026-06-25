import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Share, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { useAppTheme } from '@/context/ThemeContext';
import { useFavorites } from '@/context/FavoritesContext';
import { useAppSettings } from '@/context/SettingsContext';
import { DOA_DATA } from '@/constants/database';

export default function DoaDetailScreen() {
  const { id } = useLocalSearchParams();
  const { theme, colors } = useAppTheme();
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const { fontSizeMultiplier, setFontSizeMultiplier } = useAppSettings();
  
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);

  const doa = DOA_DATA.find((item) => item.id === id);

  useEffect(() => {
    // Stop speech when component unmounts
    return () => {
      Speech.stop();
    };
  }, []);

  if (!doa) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <Stack.Screen options={{ title: 'Doa Tidak Ditemukan', headerShown: true }} />
        <View style={styles.errorContainer}>
          <Text style={{ color: colors.text }}>Doa tidak ditemukan.</Text>
          <TouchableOpacity onPress={() => router.back()} style={[styles.backBtn, { backgroundColor: colors.accent }]}>
            <Text style={styles.backBtnText}>Kembali</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const isFav = isFavorite(doa.id);

  const handleFavoriteToggle = async () => {
    if (isFav) {
      await removeFavorite(doa.id);
    } else {
      await addFavorite(doa.id);
    }
  };

  const handleShare = async () => {
    try {
      const shareMessage = `*${doa.title}*\n\n${doa.arab}\n\n_Latin:_\n${doa.latin}\n\n_Artinya:_\n"${doa.translation}"\n\n_Referensi: ${doa.reference || 'Kumpulan Doa'}_`;
      await Share.share({
        message: shareMessage,
      });
    } catch (error) {
      Alert.alert('Gagal Berbagi', 'Tidak dapat membagikan doa.');
    }
  };

  const toggleSpeech = async () => {
    if (isSpeaking) {
      Speech.stop();
      setIsSpeaking(false);
      setAudioProgress(0);
    } else {
      setIsSpeaking(true);
      setAudioProgress(0.1);
      
      // Animate progress simulation
      const interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 1.0) {
            clearInterval(interval);
            setIsSpeaking(false);
            return 0;
          }
          return prev + 0.1;
        });
      }, 800);

      // Speak Arabic text
      Speech.speak(doa.arab, {
        language: 'ar',
        rate: 0.75,
        onDone: () => {
          clearInterval(interval);
          setIsSpeaking(false);
          setAudioProgress(0);
        },
        onError: () => {
          clearInterval(interval);
          setIsSpeaking(false);
          setAudioProgress(0);
          Alert.alert('Gagal Pemutaran', 'Perangkat Anda tidak mendukung pengucapan bahasa Arab.');
        }
      });
    }
  };

  const adjustFontSize = (type: 'increase' | 'decrease') => {
    if (type === 'increase' && fontSizeMultiplier < 1.5) {
      setFontSizeMultiplier(fontSizeMultiplier === 0.85 ? 1.0 : fontSizeMultiplier === 1.0 ? 1.25 : 1.5);
    } else if (type === 'decrease' && fontSizeMultiplier > 0.85) {
      setFontSizeMultiplier(fontSizeMultiplier === 1.5 ? 1.25 : fontSizeMultiplier === 1.25 ? 1.0 : 0.85);
    }
  };

  // Theme Overlay Colors
  const overlayColor = theme === 'dark' 
    ? 'rgba(7, 15, 11, 0.9)' // Deep Obsidian Emerald
    : 'rgba(240, 253, 244, 0.9)'; // Light Mint

  const textColor = colors.text;
  const translationTextColor = theme === 'dark' ? colors.textGreen : colors.textGreen;
  const cardBgColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.7)';
  const cardBorderColor = theme === 'dark' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.15)';

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{ 
          title: doa.title,
          headerShown: true,
          headerBackTitle: 'Kembali',
          headerStyle: { backgroundColor: colors.accent },
          headerTintColor: '#fff',
          headerRight: () => (
            <View style={styles.headerRightActions}>
              <TouchableOpacity onPress={handleFavoriteToggle} style={styles.headerActionBtn}>
                <Ionicons name={isFav ? "bookmark" : "bookmark-outline"} size={22} color="#ffffff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleShare} style={styles.headerActionBtn}>
                <Ionicons name="share-social-outline" size={22} color="#ffffff" />
              </TouchableOpacity>
            </View>
          )
        }} 
      />

      <ImageBackground 
        source={require('@/assets/images/bgDoa.png')} 
        style={styles.backgroundImage}
      >
        <View style={[styles.overlay, { backgroundColor: overlayColor }]}>
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            
            {/* Quick Font & Play controls top bar */}
            <View style={styles.controlPanelInline}>
              <View style={[styles.inlineFontBox, { backgroundColor: cardBgColor, borderColor: cardBorderColor }]}>
                <TouchableOpacity onPress={() => adjustFontSize('decrease')} style={styles.inlineFontBtn} disabled={fontSizeMultiplier <= 0.85}>
                  <Text style={[styles.fontBtnTxt, { color: colors.text, opacity: fontSizeMultiplier <= 0.85 ? 0.3 : 1 }]}>A-</Text>
                </TouchableOpacity>
                <View style={[styles.fontDivider, { backgroundColor: colors.border }]} />
                <TouchableOpacity onPress={() => adjustFontSize('increase')} style={styles.inlineFontBtn} disabled={fontSizeMultiplier >= 1.5}>
                  <Text style={[styles.fontBtnTxt, { color: colors.text, opacity: fontSizeMultiplier >= 1.5 ? 0.3 : 1 }]}>A+</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity 
                style={[styles.inlineAudioBtn, { backgroundColor: colors.accent }]}
                onPress={toggleSpeech}
                activeOpacity={0.8}
              >
                <Ionicons name={isSpeaking ? "stop" : "volume-medium-outline"} size={20} color="#ffffff" />
                <Text style={styles.inlineAudioBtnText}>{isSpeaking ? 'Berhenti' : 'Lafalkan'}</Text>
              </TouchableOpacity>
            </View>

            {/* Audio Recitation Floating Progress Player if speaking */}
            {isSpeaking && (
              <View style={[styles.progressPlayerCard, { backgroundColor: colors.cardBackground, borderColor: colors.accent }]}>
                <View style={styles.progressPlayerRow}>
                  <Ionicons name="musical-notes" size={20} color={colors.accent} />
                  <Text style={[styles.progressPlayerText, { color: colors.text }]}>Memutar Lafal Arab...</Text>
                </View>
                <View style={[styles.progressBarTrack, { backgroundColor: colors.border }]}>
                  <View style={[styles.progressBarFill, { backgroundColor: colors.accent, width: `${audioProgress * 100}%` }]} />
                </View>
              </View>
            )}

            {/* Card Content */}
            <View style={[styles.contentCard, { backgroundColor: cardBgColor, borderColor: cardBorderColor }]}>
              
              <Text style={[styles.arab, { color: textColor, fontSize: 34 * fontSizeMultiplier, lineHeight: 52 * fontSizeMultiplier }]}>
                {doa.arab}
              </Text>
              
              <View style={[styles.divider, { backgroundColor: colors.accent }]} />
              
              <Text style={[styles.latin, { color: translationTextColor, fontSize: 18 * fontSizeMultiplier, lineHeight: 26 * fontSizeMultiplier }]}>
                {doa.latin}
              </Text>
              
              <Text style={[styles.arti, { color: textColor, fontSize: 16 * fontSizeMultiplier, lineHeight: 26 * fontSizeMultiplier }]}>
                "{doa.translation}"
              </Text>

              {doa.reference && (
                <View style={[styles.referenceContainer, { borderTopColor: colors.border }]}>
                  <Text style={[styles.referenceText, { color: colors.textMuted }]}>
                    Sumber/Referensi: {doa.reference}
                  </Text>
                </View>
              )}
            </View>

          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { flex: 1, resizeMode: 'cover', justifyContent: 'center' },
  overlay: {
    flex: 1,
    padding: 20,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 24,
  },
  headerRightActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerActionBtn: {
    marginLeft: 16,
    padding: 4,
  },
  controlPanelInline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  inlineFontBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 4,
  },
  inlineFontBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  fontDivider: {
    width: 1,
    height: 16,
  },
  fontBtnTxt: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  inlineAudioBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inlineAudioBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 6,
  },
  progressPlayerCard: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  progressPlayerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressPlayerText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  progressBarTrack: {
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 2,
  },
  contentCard: {
    borderWidth: 1,
    borderRadius: 24,
    padding: 24,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  arab: { fontWeight: 'bold', textAlign: 'center', marginVertical: 12 },
  divider: { width: '30%', height: 2.5, marginVertical: 20, borderRadius: 2 },
  latin: { fontStyle: 'italic', textAlign: 'center', marginBottom: 16 },
  arti: { textAlign: 'center' },
  referenceContainer: {
    width: '100%',
    borderTopWidth: 1,
    marginTop: 24,
    paddingTop: 12,
    alignItems: 'center',
  },
  referenceText: {
    fontSize: 11,
    textAlign: 'center',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  backBtn: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  backBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
