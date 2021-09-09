import React, {useEffect} from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';
import {useSelector} from 'react-redux';
// import {fetchGenreMovies} from '../actions';
import {StarRating} from './StarRating';

export const MovieCard = props => {
  // const dispatch = useDispatch();
  const genres = useSelector(state => state.moviesReducer.genres);
  const {element} = props;
  const {
    item: {title, id, poster_path, release_date, vote_average, genre_ids},
  } = element;

  const findGenre = genreId =>
    genres.find(item => item.id === genreId && item.name);

  const genreNames = genre_ids
    .map(item => findGenre(item).name)
    .filter((_genre, index) => index < 2);

  let renderGenre = [];
  genreNames.forEach(genre => renderGenre.push(<Paragraph>{genre}</Paragraph>));

  // useEffect(() => {
  //   fetchGenreMovies(dispatch);
  // }, [dispatch]);
  return (
    <Card style={styles.card}>
      <Card.Cover
        style={styles.image}
        key={id}
        source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}}
        alt={`Cover of the movie ${title}`}
      />
      <View style={styles.content}>
        <Title style={styles.title}>{title}</Title>
        {renderGenre}
        <Paragraph style={styles.title}>{release_date.slice(0, 4)}</Paragraph>
        <StarRating rating={vote_average} />
      </View>
    </Card>
  );
};
// api de genero
const styles = StyleSheet.create({
  card: {
    // marginHorizontal: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'nowrap',
    width: '90%',
    borderRadius: 10,
  },
  image: {backgroundColor: 'white', width: '50%'},
  content: {backgroundColor: 'green'},
  title: {padding: 16},
});
