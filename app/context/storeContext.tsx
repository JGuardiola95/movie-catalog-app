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
    // Initialize from localStorage if available
    if (typeof window !== 'undefined') {
      const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    }
    return [];
  });

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  // Add a movie to favorites
  const addFavorite = (movie: Movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  // Remove a movie from favorites
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

// Define the shape of the store context
type StoreContextType = ReturnType<typeof useStoreSource>;

// Create the context with the defined type
const StoreContext = createContext<StoreContextType | undefined>(undefined);

/**
 * Provider component that supplies the store context to its children.
 * @param {ReactNode} children - The children components to be wrapped by the provider.
 * @returns The store context provider.
 */
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
