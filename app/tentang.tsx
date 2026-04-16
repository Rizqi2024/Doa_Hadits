import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TentangScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: 'Tentang Pembuat', headerBackTitle: 'Kembali', headerStyle: { backgroundColor: '#059669' }, headerTintColor: '#fff' }} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                <View style={styles.headerBackground} />

                <View style={styles.card}>
                    <Image
                        source={require('@/assets/images/logoApp.png')}
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>Rizqi Nurfadilah (202407002)</Text>
                    <View style={styles.badge}>
                        <Text style={styles.role}>Junior Developer App</Text>
                    </View>

                    <View style={styles.divider} />

                    <Text style={styles.description}>
                        Aplikasi Hadist & Doa ini dibuat sebagai pemenuhan tugas/penilaian Ujian Tengah Semester (UTS).
                        Aplikasi ini dibangun menggunakan teknologi React Native dengan framework Expo.
                        Menampilkan fitur autentikasi sederhana, desain UI yang elegan, dan menyajikan koleksi doa & hadits pilihan secara estetik.
                    </Text>

                    <View style={styles.infoContainer}>
                        <View style={styles.infoRow}>
                            <View style={styles.infoRowLeft}>
                                <Ionicons name="code-slash" size={20} color="#059669" />
                                <Text style={styles.infoLabel}>Teknologi</Text>
                            </View>
                            <Text style={styles.infoValue}>RN & Expo</Text>
                        </View>

                        <View style={styles.infoRow}>
                            <View style={styles.infoRowLeft}>
                                <Ionicons name="layers" size={20} color="#059669" />
                                <Text style={styles.infoLabel}>Versi</Text>
                            </View>
                            <Text style={styles.infoValue}>1.0.0 (Green Theme)</Text>
                        </View>

                        <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
                            <View style={styles.infoRowLeft}>
                                <Ionicons name="checkmark-circle" size={20} color="#059669" />
                                <Text style={styles.infoLabel}>Status</Text>
                            </View>
                            <Text style={[styles.infoValue, { color: '#059669' }]}>Selesai (UTS)</Text>
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
        backgroundColor: '#f0fdf4',
    },
    headerBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 140,
        backgroundColor: '#059669', // Emerald
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    scrollContainer: {
        padding: 24,
        alignItems: 'center',
        paddingTop: 40,
    },
    card: {
        backgroundColor: '#ffffff',
        width: '100%',
        borderRadius: 24,
        padding: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 8,
        borderWidth: 1,
        borderColor: '#ecfdf5',
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 55,
        backgroundColor: '#ffffff',
        marginBottom: 16,
        borderWidth: 4,
        borderColor: '#34d399',
    },
    name: {
        fontSize: 26,
        fontWeight: '800',
        color: '#064e3b',
        marginBottom: 8,
    },
    badge: {
        backgroundColor: '#dcfce7',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    role: {
        fontSize: 14,
        color: '#059669',
        fontWeight: 'bold',
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#f1f5f9',
        marginVertical: 24,
    },
    description: {
        fontSize: 15,
        color: '#475569',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 24,
    },
    infoContainer: {
        width: '100%',
        backgroundColor: '#f8fafc',
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#f1f5f9',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9',
    },
    infoRowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12, // React Native 0.71+ support flex gap
    },
    infoLabel: {
        fontSize: 15,
        fontWeight: '600',
        color: '#64748b',
        marginLeft: 8, // fallback if gap not fully supported
    },
    infoValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#334155',
        textAlign: 'right',
    },
});
