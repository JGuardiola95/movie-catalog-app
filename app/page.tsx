'use client';

import { Title } from '@ui5/webcomponents-react';
import { MoviesList, MovieFilters } from '@/app/components';
import { useQueryTopMovies } from '@/app/hooks';
import { getMovieListTitle } from '@/app/utils';

import styles from './Home.module.css';
import { useStore } from '@/app/context/storeContext';

export default function Page() {
  const { releaseYear, query } = useStore();
  const { data: moviesData, error, isLoading } = useQueryTopMovies();

  const title = getMovieListTitle(query, releaseYear);

  return (
    <div className={styles.container}>
      <MovieFilters />
      <Title size="H2" level="H2">
        {title}
      </Title>
      {moviesData ? <MoviesList movies={moviesData.data} /> : <div>Loading...</div>}
    </div>
  );
}
