import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getCurrentYear } from '@/app/utils';
import { Movie } from '@/app/api/movies/route.types';

const currentYear = String(getCurrentYear());
const FAVORITES_STORAGE_KEY = 'favoriteMovies';

/**
 * Hook that provides the source of the store.
 * @returns An object containing store values and setters.
 */
const useStoreSource = () => {
  const [query, setQuery] = useState('');
  const [releaseYear, setReleaseYear] = useState(currentYear);
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    if (typeof window !== 'undefined') {
      const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie: Movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  const removeFavorite = (movieId: number) => {
    setFavorites((prevFavorites) => prevFavorites.filter((movie) => movie.id !== movieId));
  };

  return {
    query,
    releaseYear,
    currentYear,
    favorites,
    setReleaseYear,
    setQuery,
    addFavorite,
    removeFavorite,
  };
};

type StoreContextType = ReturnType<typeof useStoreSource>;

const StoreContext = createContext<StoreContextType | undefined>(undefined);

type StoreProviderProps = {
  children: ReactNode;
};

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const value = useStoreSource();
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

/**
 * Custom hook to access the store context.
 * @returns The store context value.
 * @throws An error if used outside of the StoreProvider.
 */
export const useStore = (): StoreContextType => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
