'use client';

import { List } from '@ui5/webcomponents-react';
import { useStore } from '@/app/context/storeContext';

import { FavoriteMovieListItem } from '../FavoriteMovieListItem';
import { useCallback } from 'react';
import { EmptyStateMessage } from '../EmptyStateMessage';

export const FavoriteMoviesList = () => {
  const { favorites, removeFavorite } = useStore();

  if (!favorites || favorites.length === 0) {
    return (
      <EmptyStateMessage
        titleText="No Favorite Movies"
        subtitleText="You haven't added any movies to your favorites yet."
      />
    );
  }

  const handleRemoveFavorite = useCallback(
    (movieId: number) => {
      removeFavorite(movieId);
    },
    [removeFavorite]
  );

  return (
    <List headerText="My Favorites" selectionMode="None">
      {favorites.map((movie) => (
        <FavoriteMovieListItem key={movie.id} movie={movie} onRemoveFavorite={handleRemoveFavorite} />
      ))}
    </List>
  );
};
