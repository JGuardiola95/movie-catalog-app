'use client';

import { FlexBox, Icon, List, ListItemCustom, Text, Title } from '@ui5/webcomponents-react';
import { useStore } from '@/app/context/storeContext';
import { getPosterUrl } from '../MovieCard/MovieCard.utils';

import styles from './FavoriteMoviesList.module.css';

export const FavoriteMoviesList = () => {
  const { favorites, removeFavorite } = useStore();

  return (
    <List headerText="My favorites" selectionMode="None">
      {favorites.map((movie) => {
        return (
          <ListItemCustom key={movie.id} data-id={movie.id} style={{ height: '150px', padding: '0' }} type="Inactive">
            <FlexBox style={{ width: '100%', gap: '1rem' }}>
              <img src={getPosterUrl(movie.poster_path)} alt={movie.title} style={{ width: '80px' }} />
              <FlexBox justifyContent="SpaceBetween" style={{ width: '100%' }} direction="Column">
                <FlexBox justifyContent="SpaceBetween" style={{ width: '100%' }}>
                  <div>
                    <Title level="H3" size="H3">
                      {movie.title}
                    </Title>
                    <Title level="H5" size="H5">
                      {movie.release_date}
                    </Title>
                  </div>
                  <Icon name="heart" onClick={() => removeFavorite(movie.id)} className={styles.favoriteIcon} />
                </FlexBox>
                <Text>{movie.overview}</Text>
              </FlexBox>
            </FlexBox>
          </ListItemCustom>
        );
      })}
    </List>
  );
};
