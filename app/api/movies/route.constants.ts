export const BASE_URL = 'https://api.themoviedb.org/3';
export const TOP_MOVIES_DEFAULT_QUERY_PARAMS = {
  include_adult: 'false',
  include_video: 'false',
  language: 'en-US',
  page: '1',
  sort_by: 'vote_average.desc',
  without_genres: '99,10755',
  'vote_count.gte': '200',
};

export const AUTHORIZATION_HEADER = `Bearer ${process.env.THEMOVIEDB_ACCESS_TOKEN}`;
export const DEFAULT_ERROR_MESSAGE = 'Failed to fetch movies';
export const MAX_MOVIES_COUNT = 5;
