'use client';

import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '@/app/api/movies/route.types';

import styles from './MovieList.module.css';
import { EmptyStateMessage } from '../EmptyStateMessage';

type Props = {
  movies: Movie[];
};

export const MoviesList = ({ movies }: Props) => {
  if (!movies || movies.length === 0) {
    return <EmptyStateMessage titleText="No results" subtitleText="We couldn't find any movies." />;
  }

  return (
    <div className={styles.movieListContainer}>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
