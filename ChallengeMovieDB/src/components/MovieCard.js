import React, {useEffect} from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {fetchGenreMovies} from '../actions';
import {StarRating} from './StarRating';

export const MovieCard = props => {
  const dispatch = useDispatch();
  const genres = useSelector(state => state.moviesReducer.genres);
  const {element} = props;
  const {
    item: {title, id, poster_path, release_date, vote_average, genre_ids},
  } = element;

  useEffect(() => {
    fetchGenreMovies(dispatch);
  }, [dispatch]);

  const findGenre = genreId =>
    genres.find(item => item.id === genreId && item.name);

  const genreNames = genre_ids
    .map(item => findGenre(item).name)
    .filter((_genre, index) => index < 2);

  return (
    <View style={styles.card}>
      <Card.Cover
        style={styles.image}
        key={id}
        source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}}
        alt={`Cover of the movie ${title}`}
      />
      <View style={styles.content}>
        <View>
          <Title style={styles.title}>{title}</Title>
          <Paragraph style={styles.paragraph}>
            {genreNames.join(' / ')}
          </Paragraph>
          <Paragraph style={styles.paragraph}>
            {release_date.slice(0, 4)}
          </Paragraph>
        </View>
        <StarRating rating={vote_average} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'nowrap',
    width: 312,
    height: 168,
    // borderRadius: 20,
    backgroundColor: '#1B1C2A',
  },
  image: {backgroundColor: '#FFFFFF', width: 118, height: 168},
  content: {
    backgroundColor: '#1B1C2A',
    justifyContent: 'space-around',
    height: 168,
    margin: 10,
  },
  title: {width: 200, color: '#FFFFFF', fontSize: 16},
  paragraph: {width: 200, color: '#CDCED1', fontSize: 12},
  rating: {width: 200, backgroundColor: '#252634', fontSize: 12},
});
