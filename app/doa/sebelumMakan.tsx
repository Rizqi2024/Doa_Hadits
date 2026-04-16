import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import { Stack } from 'expo-router';

export default function SebelumMakanScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Doa Sebelum Makan', headerBackTitle: 'Kembali', headerStyle: { backgroundColor: '#059669' }, headerTintColor: '#fff' }} />
      <ImageBackground 
        source={require('@/assets/images/bgDoa.png')} 
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <View style={styles.contentCard}>
              <Text style={styles.arab}>اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ</Text>
              <View style={styles.divider} />
              <Text style={styles.latin}>Allahumma baarik lanaa fiimaa rozaqtanaa wa qinaa 'adzaaban naar.</Text>
              <Text style={styles.arti}>"Ya Allah, berkahilah rezeki yang telah Engkau berikan dan peliharalah kami dari siksa neraka."</Text>
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
  arab: { fontSize: 36, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', lineHeight: 56 },
  divider: { width: '40%', height: 2, backgroundColor: '#34d399', marginVertical: 24, borderRadius: 2 },
  latin: { fontSize: 20, fontStyle: 'italic', color: '#a7f3d0', textAlign: 'center', marginBottom: 16 },
  arti: { fontSize: 18, color: '#ecfdf5', textAlign: 'center', lineHeight: 28 },
});
