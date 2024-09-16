import '@ui5/webcomponents-icons/dist/heart.js';
import '@ui5/webcomponents-icons/dist/heart-2.js';

import { Card, CardHeader, ExpandableText, Icon } from '@ui5/webcomponents-react';
import { Movie } from '@/app/api/movies/route.types';
import styles from './MovieCard.module.css';
import { getPosterUrl } from './MovieCard.utils';
import { useStore } from '@/app/context/storeContext';
import { getRoundedRating } from '@/app/utils';

type Props = {
  movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
  const { title, overview, release_date, vote_average, poster_path } = movie;
  const { addFavorite, removeFavorite, favorites } = useStore();

  const posterUrl = getPosterUrl(poster_path);
  const isFavorite = favorites.some((favMovie) => favMovie.id === movie.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <Card className={styles.card} header={<CardHeader titleText={title} subtitleText={release_date} />}>
      <div className={styles.cardContent}>
        <div>
          <img src={posterUrl} alt={title} className={styles.poster} />
          <ExpandableText className={styles.expandableText} maxCharacters={350}>
            {overview}
          </ExpandableText>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.rating}>Rating: {getRoundedRating(vote_average)}</div>
          <Icon name={isFavorite ? 'heart' : 'heart-2'} className={styles.favoriteIcon} onClick={toggleFavorite} />
        </div>
      </div>
    </Card>
  );
};
