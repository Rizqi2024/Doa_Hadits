import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserProfile {
  username: string;
  email: string;
}

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; message: string }>;
  register: (username: string, email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkLoginSession = async () => {
      try {
        const savedSession = await AsyncStorage.getItem('@auth_session');
        if (savedSession) {
          setUser(JSON.parse(savedSession));
        }
      } catch (e) {
        console.warn('Failed to load session', e);
      } finally {
        setIsLoading(false);
      }
    };
    checkLoginSession();
  }, []);

  const login = async (usernameInput: string, passwordInput: string): Promise<{ success: boolean; message: string }> => {
    try {
      const username = usernameInput.trim().toLowerCase();
      const password = passwordInput;

      // Fallback pre-registered accounts
      if ((username === 'rizqi' && password === 'rizqi123') || (username === 'admin' && password === 'admin123')) {
        const sessionUser: UserProfile = { username, email: `${username}@gmail.com` };
        setUser(sessionUser);
        await AsyncStorage.setItem('@auth_session', JSON.stringify(sessionUser));
        return { success: true, message: 'Berhasil masuk' };
      }

      // Check registered users in storage
      const registeredUsersStr = await AsyncStorage.getItem('@users_database');
      if (registeredUsersStr) {
        const users = JSON.parse(registeredUsersStr);
        const match = users.find(
          (u: any) => u.username.toLowerCase() === username && u.password === password
        );
        if (match) {
          const sessionUser: UserProfile = { username: match.username, email: match.email };
          setUser(sessionUser);
          await AsyncStorage.setItem('@auth_session', JSON.stringify(sessionUser));
          return { success: true, message: 'Berhasil masuk' };
        }
      }

      return { success: false, message: 'Username atau password salah!' };
    } catch (e) {
      return { success: false, message: 'Terjadi kesalahan sistem' };
    }
  };

  const register = async (usernameInput: string, emailInput: string, passwordInput: string): Promise<{ success: boolean; message: string }> => {
    try {
      const username = usernameInput.trim();
      const email = emailInput.trim();
      const password = passwordInput;

      // Check if username already exists in default/predefined or local database
      const predefinedUsernames = ['rizqi', 'admin'];
      if (predefinedUsernames.includes(username.toLowerCase())) {
        return { success: false, message: 'Username sudah terdaftar!' };
      }

      // Get current list of users
      const registeredUsersStr = await AsyncStorage.getItem('@users_database');
      let users = registeredUsersStr ? JSON.parse(registeredUsersStr) : [];

      // Check duplicate
      const duplicate = users.find(
        (u: any) => u.username.toLowerCase() === username.toLowerCase() || u.email.toLowerCase() === email.toLowerCase()
      );
      if (duplicate) {
        return { success: false, message: 'Username atau email sudah digunakan!' };
      }

      // Add user
      const newUser = { username, email, password };
      users.push(newUser);
      await AsyncStorage.setItem('@users_database', JSON.stringify(users));
      
      return { success: true, message: 'Pendaftaran berhasil! Silakan masuk.' };
    } catch (e) {
      return { success: false, message: 'Terjadi kesalahan pendaftaran' };
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      await AsyncStorage.removeItem('@auth_session');
    } catch (e) {
      console.warn('Failed to logout session', e);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAppAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAppAuth must be used within an AuthProvider');
  }
  return context;
};
