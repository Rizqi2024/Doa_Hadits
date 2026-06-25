import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider } from '@/context/AuthContext';
import { ThemeProvider as AppThemeProvider, useAppTheme } from '@/context/ThemeContext';
import { FavoritesProvider } from '@/context/FavoritesContext';
import { SettingsProvider } from '@/context/SettingsContext';
import { DarkTheme, DefaultTheme, ThemeProvider as NavThemeProvider } from '@react-navigation/native';

export const unstable_settings = {
  anchor: '(tabs)',
};

function InnerLayout() {
  const { theme } = useAppTheme();
  
  return (
    <NavThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="doa/index" options={{ headerShown: false }} />
        <Stack.Screen name="hadits/index" options={{ headerShown: false }} />
        <Stack.Screen name="doa/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="hadits/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="tentang" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
    </NavThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <SettingsProvider>
          <FavoritesProvider>
            <AuthProvider>
              <InnerLayout />
            </AuthProvider>
          </FavoritesProvider>
        </SettingsProvider>
      </AppThemeProvider>
    </SafeAreaProvider>
  );
}

