import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAppTheme } from '@/context/ThemeContext';
import { useAppSettings } from '@/context/SettingsContext';
import { useAppAuth } from '@/context/AuthContext';

export default function SettingsScreen() {
  const { theme, colors, toggleTheme } = useAppTheme();
  const { fontSizeMultiplier, setFontSizeMultiplier, dailyReminderEnabled, setDailyReminderEnabled, dailyReminderTime, setDailyReminderTime } = useAppSettings();
  const { user, logout } = useAppAuth();

  const handleLogout = () => {
    Alert.alert('Keluar', 'Apakah Anda yakin ingin keluar dari akun?', [
      { text: 'Batal', style: 'cancel' },
      {
        text: 'Keluar',
        style: 'destructive',
        onPress: async () => {
          await logout();
          router.replace('/login' as any);
        }
      }
    ]);
  };

  const handleTimeChange = () => {
    Alert.alert('Pilih Waktu Pengingat', 'Pilih jam pengingat harian Anda:', [
      { text: '05:00 Pagi', onPress: () => setDailyReminderTime('05:00') },
      { text: '06:00 Pagi', onPress: () => setDailyReminderTime('06:00') },
      { text: '07:00 Pagi', onPress: () => setDailyReminderTime('07:00') },
      { text: '18:00 Sore', onPress: () => setDailyReminderTime('18:00') },
      { text: 'Batal', style: 'cancel' }
    ]);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.accent }]}>
        <Text style={styles.headerTitle}>Pengaturan</Text>
        <Text style={[styles.headerSubtitle, { color: theme === 'dark' ? colors.textGreen : '#d1fae5' }]}>
          Sesuaikan preferensi aplikasi Anda
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Profile Card */}
        <View style={[styles.section, { backgroundColor: colors.cardBackground, borderColor: colors.cardBorder }]}>
          <View style={styles.profileRow}>
            <View style={[styles.avatarCircle, { backgroundColor: colors.accent }]}>
              <Text style={styles.avatarText}>
                {user ? user.username.substring(0, 1).toUpperCase() : 'U'}
              </Text>
            </View>
            <View style={styles.profileText}>
              <Text style={[styles.profileName, { color: colors.text }]}>{user ? user.username : 'Sahabat'}</Text>
              <Text style={[styles.profileEmail, { color: colors.textMuted }]}>{user ? user.email : 'sahabat@email.com'}</Text>
            </View>
          </View>
        </View>

        <Text style={[styles.sectionTitle, { color: colors.textGreen }]}>Tampilan & Kenyamanan</Text>

        {/* Theme Settings */}
        <View style={[styles.section, { backgroundColor: colors.cardBackground, borderColor: colors.cardBorder }]}>
          <View style={styles.settingRow}>
            <View style={styles.settingLabelContainer}>
              <Ionicons name="moon" size={22} color={colors.accent} style={styles.settingIcon} />
              <View>
                <Text style={[styles.settingTitle, { color: colors.text }]}>Tema Gelap (Dark Mode)</Text>
                <Text style={[styles.settingDesc, { color: colors.textMuted }]}>Gunakan Emerald Dark Theme</Text>
              </View>
            </View>
            <Switch
              value={theme === 'dark'}
              onValueChange={toggleTheme}
              trackColor={{ false: '#cbd5e1', true: '#a7f3d0' }}
              thumbColor={theme === 'dark' ? colors.accent : '#f4f3f4'}
            />
          </View>
        </View>

        {/* Font Settings */}
        <View style={[styles.section, { backgroundColor: colors.cardBackground, borderColor: colors.cardBorder }]}>
          <View style={styles.settingCol}>
            <View style={styles.settingLabelContainer}>
              <Ionicons name="text" size={22} color={colors.accent} style={styles.settingIcon} />
              <View>
                <Text style={[styles.settingTitle, { color: colors.text }]}>Ukuran Font Teks</Text>
                <Text style={[styles.settingDesc, { color: colors.textMuted }]}>Sesuaikan kenyamanan membaca Arab & terjemahan</Text>
              </View>
            </View>
            
            <View style={styles.fontSelectorRow}>
              <TouchableOpacity
                style={[
                  styles.fontButton,
                  { backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.02)' : '#f1f5f9' },
                  fontSizeMultiplier === 0.85 && [styles.fontButtonActive, { backgroundColor: colors.accent }]
                ]}
                onPress={() => setFontSizeMultiplier(0.85)}
              >
                <Text style={[styles.fontButtonText, { color: fontSizeMultiplier === 0.85 ? '#ffffff' : colors.text }]}>Kecil</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.fontButton,
                  { backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.02)' : '#f1f5f9' },
                  fontSizeMultiplier === 1.0 && [styles.fontButtonActive, { backgroundColor: colors.accent }]
                ]}
                onPress={() => setFontSizeMultiplier(1.0)}
              >
                <Text style={[styles.fontButtonText, { color: fontSizeMultiplier === 1.0 ? '#ffffff' : colors.text }]}>Normal</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.fontButton,
                  { backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.02)' : '#f1f5f9' },
                  fontSizeMultiplier === 1.25 && [styles.fontButtonActive, { backgroundColor: colors.accent }]
                ]}
                onPress={() => setFontSizeMultiplier(1.25)}
              >
                <Text style={[styles.fontButtonText, { color: fontSizeMultiplier === 1.25 ? '#ffffff' : colors.text }]}>Besar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.fontButton,
                  { backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.02)' : '#f1f5f9' },
                  fontSizeMultiplier === 1.5 && [styles.fontButtonActive, { backgroundColor: colors.accent }]
                ]}
                onPress={() => setFontSizeMultiplier(1.5)}
              >
                <Text style={[styles.fontButtonText, { color: fontSizeMultiplier === 1.5 ? '#ffffff' : colors.text }]}>Sangat Besar</Text>
              </TouchableOpacity>
            </View>
            
            {/* Font Preview Area */}
            <View style={[styles.fontPreviewCard, { backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.02)' : '#f8fafc', borderColor: colors.border }]}>
              <Text style={[styles.fontPreviewArab, { color: colors.text, fontSize: 24 * fontSizeMultiplier }]}>
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
              </Text>
              <Text style={[styles.fontPreviewText, { color: colors.textMuted, fontSize: 13 * fontSizeMultiplier }]}>
                Pratinjau ukuran teks terjemahan akan tampil seperti ini.
              </Text>
            </View>
          </View>
        </View>

        <Text style={[styles.sectionTitle, { color: colors.textGreen }]}>Fitur Pengingat</Text>

        {/* Daily Reminder Settings */}
        <View style={[styles.section, { backgroundColor: colors.cardBackground, borderColor: colors.cardBorder }]}>
          <View style={styles.settingRow}>
            <View style={styles.settingLabelContainer}>
              <Ionicons name="notifications" size={22} color={colors.accent} style={styles.settingIcon} />
              <View>
                <Text style={[styles.settingTitle, { color: colors.text }]}>Pengingat Harian</Text>
                <Text style={[styles.settingDesc, { color: colors.textMuted }]}>Kirim notifikasi hadits & doa harian</Text>
              </View>
            </View>
            <Switch
              value={dailyReminderEnabled}
              onValueChange={setDailyReminderEnabled}
              trackColor={{ false: '#cbd5e1', true: '#a7f3d0' }}
              thumbColor={dailyReminderEnabled ? colors.accent : '#f4f3f4'}
            />
          </View>

          {dailyReminderEnabled && (
            <TouchableOpacity 
              style={[styles.settingRowInner, { borderTopColor: colors.border }]}
              onPress={handleTimeChange}
              activeOpacity={0.7}
            >
              <View style={styles.settingLabelContainer}>
                <Ionicons name="time-outline" size={20} color={colors.accent} style={styles.settingIcon} />
                <View>
                  <Text style={[styles.settingTitleInner, { color: colors.text }]}>Waktu Pengingat</Text>
                  <Text style={[styles.settingDescInner, { color: colors.textMuted }]}>Notifikasi dikirim setiap pukul {dailyReminderTime}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
            </TouchableOpacity>
          )}
        </View>

        {/* Log Out */}
        <TouchableOpacity 
          style={[styles.logoutButton, { borderColor: '#ef4444' }]} 
          onPress={handleLogout}
          activeOpacity={0.7}
        >
          <Ionicons name="log-out-outline" size={20} color="#ef4444" style={styles.logoutIcon} />
          <Text style={styles.logoutButtonText}>Keluar Akun</Text>
        </TouchableOpacity>

      </ScrollView>
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
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  section: {
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  profileText: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '800',
    textTransform: 'capitalize',
  },
  profileEmail: {
    fontSize: 14,
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '800',
    marginLeft: 8,
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingRowInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: 1,
  },
  settingCol: {
    flexDirection: 'column',
  },
  settingLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    marginRight: 14,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  settingDesc: {
    fontSize: 13,
    marginTop: 2,
  },
  settingTitleInner: {
    fontSize: 15,
    fontWeight: '600',
  },
  settingDescInner: {
    fontSize: 12,
    marginTop: 2,
  },
  fontSelectorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    gap: 8,
  },
  fontButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontButtonActive: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  fontButtonText: {
    fontSize: 13,
    fontWeight: '700',
  },
  fontPreviewCard: {
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'dashed',
    alignItems: 'center',
  },
  fontPreviewArab: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 40,
  },
  fontPreviewText: {
    textAlign: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderRadius: 16,
    paddingVertical: 14,
    marginTop: 10,
    marginBottom: 20,
  },
  logoutIcon: {
    marginRight: 8,
  },
  logoutButtonText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#ef4444',
  },
});
