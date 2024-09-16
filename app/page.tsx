'use client';

import { BusyIndicator, Title } from '@ui5/webcomponents-react';
import { MoviesList, MovieFilters } from '@/app/components';
import { useQueryTopMovies } from '@/app/hooks';
import { getMovieListTitle } from '@/app/utils';

import styles from './Home.module.css';
import { useStore } from '@/app/context/storeContext';

/**
 * The main page component that displays the movies list with filters.
 * @returns The main page component.
 */
export default function Page() {
  const { releaseYear, query } = useStore();
  const { data: moviesData, isError, isLoading } = useQueryTopMovies();

  const title = getMovieListTitle(query, releaseYear);

  return (
    <div className={styles.container}>
      <MovieFilters />
      <Title size="H2" level="H2">
        {title}
      </Title>
      {isLoading && <BusyIndicator active />}
      {isError && <div>Error loading movies. Please try again.</div>}
      {!isLoading && !isError && moviesData && <MoviesList movies={moviesData.data} />}
    </div>
  );
}
