import { NextResponse } from 'next/server';

export type TheMovieDbResponse = {
  results: Movie[];
};

export type GetMoviesSuccess = {
  data: Movie[];
};

export type GetMoviesError = {
  error: string;
};

export type GetMoviesResponse = NextResponse<GetMoviesSuccess | GetMoviesError>;

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
