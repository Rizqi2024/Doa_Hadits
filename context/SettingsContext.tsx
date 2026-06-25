import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';
import { Platform } from 'react-native';

interface SettingsContextType {
  fontSizeMultiplier: number;
  setFontSizeMultiplier: (multiplier: number) => void;
  dailyReminderEnabled: boolean;
  setDailyReminderEnabled: (enabled: boolean) => void;
  dailyReminderTime: string;
  setDailyReminderTime: (time: string) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontSizeMultiplier, setFontSizeMultiplierState] = useState<number>(1.0);
  const [dailyReminderEnabled, setDailyReminderEnabledState] = useState<boolean>(false);
  const [dailyReminderTime, setDailyReminderTimeState] = useState<string>('06:00');

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const savedMultiplier = await AsyncStorage.getItem('@settings_font_size');
        if (savedMultiplier) {
          setFontSizeMultiplierState(parseFloat(savedMultiplier));
        }

        const savedReminder = await AsyncStorage.getItem('@settings_daily_reminder');
        if (savedReminder) {
          setDailyReminderEnabledState(savedReminder === 'true');
        }

        const savedTime = await AsyncStorage.getItem('@settings_daily_reminder_time');
        if (savedTime) {
          setDailyReminderTimeState(savedTime);
        }
      } catch (e) {
        console.warn('Failed to load settings from storage', e);
      }
    };
    loadSettings();
  }, []);

  const setFontSizeMultiplier = async (multiplier: number) => {
    try {
      setFontSizeMultiplierState(multiplier);
      await AsyncStorage.setItem('@settings_font_size', multiplier.toString());
    } catch (e) {
      console.warn('Failed to save font size setting', e);
    }
  };

  const setDailyReminderEnabled = async (enabled: boolean) => {
    try {
      setDailyReminderEnabledState(enabled);
      await AsyncStorage.setItem('@settings_daily_reminder', enabled ? 'true' : 'false');
      
      if (enabled) {
        // Setup local push reminder notification
        setupDailyNotification(dailyReminderTime);
      } else {
        // Cancel notifications
        cancelDailyNotification();
      }
    } catch (e) {
      console.warn('Failed to save daily reminder setting', e);
    }
  };

  const setDailyReminderTime = async (time: string) => {
    try {
      setDailyReminderTimeState(time);
      await AsyncStorage.setItem('@settings_daily_reminder_time', time);
      if (dailyReminderEnabled) {
        setupDailyNotification(time);
      }
    } catch (e) {
      console.warn('Failed to save daily reminder time setting', e);
    }
  };

  // Helper functions to manage reminders (graceful fallback if notifications not fully configured)
  const setupDailyNotification = async (timeStr: string) => {
    try {
      const [hours, minutes] = timeStr.split(':').map(Number);
      
      // Try using expo-notifications if available
      const Notifications = require('expo-notifications');
      if (Notifications) {
        await Notifications.cancelAllScheduledNotificationsAsync();
        
        // Request permissions
        const { status } = await Notifications.getPermissionsAsync();
        let finalStatus = status;
        if (status !== 'granted') {
          const { status: askStatus } = await Notifications.requestPermissionsAsync();
          finalStatus = askStatus;
        }
        
        if (finalStatus === 'granted') {
          await Notifications.scheduleNotificationAsync({
            content: {
              title: '📖 Hadits & Doa Harian',
              body: 'Waktunya membaca doa harian dan hadits pilihan untuk mengawali aktivitas Anda hari ini!',
              sound: true,
            },
            trigger: {
              type: Notifications.SchedulableTriggerInputTypes.DAILY,
              hour: hours,
              minute: minutes,
            },
          });
          console.log(`Notification scheduled daily for ${timeStr}`);
        }
      }
    } catch (err) {
      console.log('Push notifications library could not schedule reminder (expected in web or mock contexts):', err);
    }
  };

  const cancelDailyNotification = async () => {
    try {
      const Notifications = require('expo-notifications');
      if (Notifications) {
        await Notifications.cancelAllScheduledNotificationsAsync();
        console.log('All scheduled notifications cancelled');
      }
    } catch (err) {
      // Graceful ignore
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        fontSizeMultiplier,
        setFontSizeMultiplier,
        dailyReminderEnabled,
        setDailyReminderEnabled,
        dailyReminderTime,
        setDailyReminderTime,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useAppSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useAppSettings must be used within a SettingsProvider');
  }
  return context;
};
