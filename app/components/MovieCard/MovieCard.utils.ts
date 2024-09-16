export const getPosterUrl = (posterPath: string | null): string => {
  return posterPath
    ? `${process.env.NEXT_PUBLIC_TMDB_POSTER_BASE_URL}${posterPath}`
    : 'https://placehold.co/600x400?text=No+Poster';
};
