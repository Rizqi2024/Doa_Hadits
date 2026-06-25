import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme as RNUseColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  cardBackground: string;
  cardBorder: string;
  text: string;
  textMuted: string;
  textGreen: string;
  accent: string;
  accentMuted: string;
  border: string;
  borderActive: string;
  shadow: string;
  tabBar: string;
  tabBarActive: string;
  tabBarInactive: string;
}

export const themeColors: Record<ThemeMode, ThemeColors> = {
  light: {
    background: '#f0fdf4', // Light green mint
    cardBackground: '#ffffff',
    cardBorder: '#ecfdf5',
    text: '#0f172a', // Slate 900
    textMuted: '#64748b', // Slate 500
    textGreen: '#064e3b', // Emerald 950
    accent: '#059669', // Emerald 600
    accentMuted: '#dcfce7', // Emerald 100
    border: '#e2e8f0', // Slate 200
    borderActive: '#10b981', // Emerald 500
    shadow: '#166534',
    tabBar: '#ffffff',
    tabBarActive: '#059669',
    tabBarInactive: '#94a3b8',
  },
  dark: {
    background: '#070f0b', // Deep forest obsidian
    cardBackground: '#0c1611', // Very dark forest green card
    cardBorder: 'rgba(16, 185, 129, 0.15)', // Light glass green border
    text: '#f8fafc', // Slate 50
    textMuted: '#94a3b8', // Slate 400
    textGreen: '#a7f3d0', // Mint 200
    accent: '#10b981', // Emerald 500
    accentMuted: 'rgba(16, 185, 129, 0.1)', // Very faint emerald background
    border: '#1e293b', // Slate 800
    borderActive: '#34d399', // Emerald 400
    shadow: '#000000',
    tabBar: '#0c1611',
    tabBarActive: '#10b981',
    tabBarInactive: '#64748b',
  },
};

interface ThemeContextType {
  theme: ThemeMode;
  colors: ThemeColors;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemScheme = RNUseColorScheme();
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    // Load theme setting from storage
    const loadThemeSetting = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('@theme_mode');
        if (savedTheme === 'light' || savedTheme === 'dark') {
          setTheme(savedTheme);
        } else if (systemScheme === 'dark') {
          setTheme('dark');
        }
      } catch (e) {
        console.warn('Failed to load theme preference', e);
      }
    };
    loadThemeSetting();
  }, [systemScheme]);

  const toggleTheme = async () => {
    try {
      const nextTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(nextTheme);
      await AsyncStorage.setItem('@theme_mode', nextTheme);
    } catch (e) {
      console.warn('Failed to save theme preference', e);
    }
  };

  const setThemeMode = async (mode: ThemeMode) => {
    try {
      setTheme(mode);
      await AsyncStorage.setItem('@theme_mode', mode);
    } catch (e) {
      console.warn('Failed to save theme preference', e);
    }
  };

  const colors = themeColors[theme];

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within a ThemeProvider');
  }
  return context;
};
