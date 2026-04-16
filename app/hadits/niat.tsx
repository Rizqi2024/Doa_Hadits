import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import { Stack } from 'expo-router';

export default function NiatScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Hadits Niat', headerBackTitle: 'Kembali', headerStyle: { backgroundColor: '#059669' }, headerTintColor: '#fff' }} />
      <ImageBackground 
        source={require('@/assets/images/bgHadits.png')} 
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <View style={styles.contentCard}>
              <Text style={styles.arab}>إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ</Text>
              <View style={styles.divider} />
              <Text style={styles.latin}>Innamal a'malu bin-niyyat.</Text>
              <Text style={styles.arti}>"Sesungguhnya amal itu tergantung pada niat."</Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0fdf4' },
  backgroundImage: { flex: 1, resizeMode: 'cover', justifyContent: 'center' },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(6, 78, 59, 0.85)', // Very Dark Green Overlay
    padding: 24,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(52, 211, 153, 0.3)',
    borderRadius: 24,
    padding: 30,
    width: '100%',
    alignItems: 'center',
  },
  arab: { fontSize: 38, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', lineHeight: 60 },
  divider: { width: '40%', height: 2, backgroundColor: '#34d399', marginVertical: 24, borderRadius: 2 },
  latin: { fontSize: 20, fontStyle: 'italic', color: '#a7f3d0', textAlign: 'center', marginBottom: 16 },
  arti: { fontSize: 18, color: '#ecfdf5', textAlign: 'center', lineHeight: 28 },
});
