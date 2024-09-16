'use client';

import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '@/app/api/movies/route.types';

import styles from './MovieList.module.css';

type Props = {
  movies: Movie[];
};

export const MoviesList = ({ movies }: Props) => {
  return (
    <div className={styles.movieListContainer}>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
