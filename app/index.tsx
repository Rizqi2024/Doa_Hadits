import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated, Dimensions } from 'react-native';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

export default function SplashScreen() {
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animasi progress bar selama 2.5 detik
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: false,
    }).start();

    // Navigasi ke halaman login setelah animasi selesai
    const timer = setTimeout(() => {
      router.replace('/login');
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  // Animasi lebar dari 0 hingga 60% layar
  const barWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width * 0.6],
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require('@/assets/images/logoApp.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />
        <Text style={styles.title}>Hadist & Doa</Text>
        <Text style={styles.subtitle}>Panduan ibadah dan inspirasi harian</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.progressBarContainer}>
          <Animated.View style={[styles.progressBar, { width: barWidth }]} />
        </View>
        <Text style={styles.loadingText}>Menyiapkan aplikasi...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#064e3b', // Hijau tua elegan (Emerald 900)
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 60,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#ecfdf5',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: '#a7f3d0',
    marginTop: 8,
    fontWeight: '500',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 60,
  },
  progressBarContainer: {
    width: width * 0.6,
    height: 6,
    backgroundColor: '#047857', // Hijau agak gelap untuk track
    borderRadius: 8,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#34d399', // Hijau cerah untuk indikator progress
    borderRadius: 8,
  },
  loadingText: {
    color: '#a7f3d0',
    marginTop: 12,
    fontSize: 14,
    fontWeight: '500',
  },
});
