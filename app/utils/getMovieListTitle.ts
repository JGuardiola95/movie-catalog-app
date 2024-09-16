/**
 * Generates a title for the movie list based on the search query and release year.
 * @param {string | null} query - The search query.
 * @param {string} releaseYear - The release year.
 * @returns {string} The title for the movies list.
 */
export const getMovieListTitle = (query: string | null, releaseYear: string): string => {
  return query ? `Search Results for "${query}"` : `Top 5 Movies from ${releaseYear}`;
};
