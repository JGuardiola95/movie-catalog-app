import { AUTHORIZATION_HEADER, BASE_URL, MAX_MOVIES_COUNT, TOP_MOVIES_DEFAULT_QUERY_PARAMS } from './route.constants';
import { TheMovieDbResponse } from './route.types';

/**
 * Generates the URL for fetching movies based on the query and release year.
 * @param {string} query - The search query for movie titles.
 * @param {string | null} releaseYear - The release year to filter movies.
 * @returns {string} The URL for fetching movies.
 */
export const getMoviesUrl = (query: string | null, releaseYear: string): string => {
  const endpoint = query ? '/search/movie' : '/discover/movie';
  const queryParams = new URLSearchParams(TOP_MOVIES_DEFAULT_QUERY_PARAMS);

  if (query) {
    queryParams.set('query', query);
  } else {
    queryParams.set('primary_release_year', releaseYear);
  }

  return `${BASE_URL}${endpoint}?${queryParams.toString()}`;
};

/**
 * Fetches movies from the specified URL.
 * @param {string} url - The URL to fetch movies from.
 * @returns {Promise<Movie[]>} The top movies from the fetched data.
 */
export const fetchMovies = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: AUTHORIZATION_HEADER,
      accept: 'application/json',
    },
  });

  const data: TheMovieDbResponse = await response.json();
  return data.results.slice(0, MAX_MOVIES_COUNT);
};
