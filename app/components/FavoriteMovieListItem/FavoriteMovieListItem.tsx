import { FlexBox, Icon, ListItemCustom, Title, Text } from '@ui5/webcomponents-react';
import { Movie } from '@/app/api/movies/route.types';
import { getPosterUrl } from '../MovieCard/MovieCard.utils';
import { memo } from 'react';

import styles from './FavoriteMovieListItem.module.css';

type FavoriteMovieListItemProps = {
  movie: Movie;
  onRemoveFavorite: (movieId: number) => void;
};

export const FavoriteMovieListItem = memo(({ movie, onRemoveFavorite }: FavoriteMovieListItemProps) => {
  return (
    <ListItemCustom key={movie.id} data-id={movie.id} className={styles.listItem} type="Inactive">
      <FlexBox className={styles.listItemContent}>
        <img src={getPosterUrl(movie.poster_path)} alt={movie.title} className={styles.poster} />
        <FlexBox justifyContent="SpaceBetween" className={styles.listItemDetails} direction="Column">
          <FlexBox justifyContent="SpaceBetween">
            <div>
              <Title level="H3" size="H3">
                {movie.title}
              </Title>
              <Title level="H5" size="H5">
                {movie.release_date}
              </Title>
            </div>
            <Icon name="heart" onClick={() => onRemoveFavorite(movie.id)} className={styles.favoriteIcon} />
          </FlexBox>
          <Text>{movie.overview}</Text>
        </FlexBox>
      </FlexBox>
    </ListItemCustom>
  );
});

FavoriteMovieListItem.displayName = 'FavoriteMovieListItem';
