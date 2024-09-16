import { useQuery } from '@tanstack/react-query';

import { GetMoviesSuccess } from '../api/movies/route.types';
import { useStore } from '@/app/context/storeContext';

/**
 * Fetches movies based on the release year and query.
 * @param {string} releaseYear - The release year for filtering movies.
 * @param {string} query - The search query for movie titles.
 * @returns {Promise<GetMoviesSuccess>} The fetched movie data.
 * @throws Will throw an error if the network response is not ok.
 */
export const fetchMovies = async (releaseYear: string, query: string): Promise<GetMoviesSuccess> => {
  const response = await fetch(`/api/movies?release_year=${releaseYear}&query=${query}`);
  if (!response.ok) {
    throw new Error('Server error');
  }
  return response.json();
};

/**
 * Custom hook for querying the top movies based on release year and search query.
 * @returns The query result from React Query.
 */
export const useQueryTopMovies = () => {
  const { releaseYear, query } = useStore();

  return useQuery({
    queryKey: ['movies', releaseYear, query],
    queryFn: () => fetchMovies(releaseYear, query),
  });
};
