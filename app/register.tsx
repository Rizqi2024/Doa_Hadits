import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ActivityIndicator, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAppAuth } from '@/context/AuthContext';
import { useAppTheme } from '@/context/ThemeContext';

export default function RegisterScreen() {
  const { register } = useAppAuth();
  const { theme, colors } = useAppTheme();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Perhatian', 'Semua kolom pendaftaran wajib diisi!');
      return;
    }

    if (username.length < 3) {
      Alert.alert('Perhatian', 'Username minimal 3 karakter!');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Perhatian', 'Password minimal 6 karakter!');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Perhatian', 'Konfirmasi password tidak cocok!');
      return;
    }

    // Email basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Perhatian', 'Format email tidak valid!');
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await register(username, email, password);
      setIsLoading(false);
      
      if (response.success) {
        Alert.alert('Sukses', response.message, [
          { text: 'Masuk Sekarang', onPress: () => router.replace('/login' as any) }
        ]);
      } else {
        Alert.alert('Gagal', response.message);
      }
    } catch (e) {
      setIsLoading(false);
      Alert.alert('Error', 'Terjadi kesalahan saat mendaftar.');
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.topDecoration, { backgroundColor: colors.accent }]} />

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.innerContainer}
      >
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image 
              source={require('@/assets/images/logoApp.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.title}>Daftar Akun</Text>
          <Text style={[styles.subtitle, { color: theme === 'dark' ? colors.textGreen : '#d1fae5' }]}>
            Buat akun untuk menyimpan doa favorit Anda
          </Text>
        </View>

        <View style={[styles.formContainer, { backgroundColor: colors.cardBackground, borderColor: colors.cardBorder }]}>
          
          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: colors.textGreen }]}>Username</Text>
            <View style={[styles.inputContainer, { backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.02)' : '#f8fafc', borderColor: colors.border }]}>
              <Ionicons name="person-outline" size={20} color={colors.accent} style={styles.icon} />
              <TextInput
                style={[styles.input, { color: colors.text }]}
                placeholder="Masukkan username"
                placeholderTextColor={theme === 'dark' ? '#475569' : '#9ca3af'}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: colors.textGreen }]}>Email</Text>
            <View style={[styles.inputContainer, { backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.02)' : '#f8fafc', borderColor: colors.border }]}>
              <Ionicons name="mail-outline" size={20} color={colors.accent} style={styles.icon} />
              <TextInput
                style={[styles.input, { color: colors.text }]}
                placeholder="cth: nama@email.com"
                placeholderTextColor={theme === 'dark' ? '#475569' : '#9ca3af'}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: colors.textGreen }]}>Password</Text>
            <View style={[styles.inputContainer, { backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.02)' : '#f8fafc', borderColor: colors.border }]}>
              <Ionicons name="lock-closed-outline" size={20} color={colors.accent} style={styles.icon} />
              <TextInput
                style={[styles.input, { color: colors.text }]}
                placeholder="Minimal 6 karakter"
                placeholderTextColor={theme === 'dark' ? '#475569' : '#9ca3af'}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons 
                  name={showPassword ? "eye-outline" : "eye-off-outline"} 
                  size={20} 
                  color={theme === 'dark' ? '#475569' : '#6b7280'} 
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: colors.textGreen }]}>Konfirmasi Password</Text>
            <View style={[styles.inputContainer, { backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.02)' : '#f8fafc', borderColor: colors.border }]}>
              <Ionicons name="lock-closed-outline" size={20} color={colors.accent} style={styles.icon} />
              <TextInput
                style={[styles.input, { color: colors.text }]}
                placeholder="Ketik ulang password"
                placeholderTextColor={theme === 'dark' ? '#475569' : '#9ca3af'}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showPassword}
              />
            </View>
          </View>

          <TouchableOpacity 
            style={[styles.registerButton, { backgroundColor: colors.accent }]} 
            onPress={handleRegister}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.registerButtonText}>Daftar Sekarang</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.loginLink} 
            onPress={() => router.replace('/login' as any)}
          >
            <Text style={[styles.loginLinkText, { color: colors.textMuted }]}>
              Sudah punya akun? <Text style={{ color: colors.accent, fontWeight: 'bold' }}>Masuk</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topDecoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 250,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  innerContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  logoContainer: {
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  logo: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
  },
  formContainer: {
    padding: 24,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
  },
  inputGroup: {
    marginBottom: 14,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 48,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
  registerButton: {
    borderRadius: 12,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  registerButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  loginLink: {
    alignItems: 'center',
    marginTop: 16,
  },
  loginLinkText: {
    fontSize: 14,
  },
});
