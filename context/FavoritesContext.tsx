import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FavoritesContextType {
  favorites: string[];
  addFavorite: (id: string) => Promise<void>;
  removeFavorite: (id: string) => Promise<void>;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const savedFavorites = await AsyncStorage.getItem('@favorites_list');
        if (savedFavorites) {
          setFavorites(JSON.parse(savedFavorites));
        }
      } catch (e) {
        console.warn('Failed to load favorites', e);
      }
    };
    loadFavorites();
  }, []);

  const addFavorite = async (id: string) => {
    try {
      if (!favorites.includes(id)) {
        const updated = [...favorites, id];
        setFavorites(updated);
        await AsyncStorage.setItem('@favorites_list', JSON.stringify(updated));
      }
    } catch (e) {
      console.warn('Failed to add favorite', e);
    }
  };

  const removeFavorite = async (id: string) => {
    try {
      const updated = favorites.filter((favId) => favId !== id);
      setFavorites(updated);
      await AsyncStorage.setItem('@favorites_list', JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to remove favorite', e);
    }
  };

  const isFavorite = (id: string): boolean => {
    return favorites.includes(id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
