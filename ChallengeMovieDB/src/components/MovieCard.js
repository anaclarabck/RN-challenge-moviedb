import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-native';
import {fetchGenreMovies} from '../actions';
import {StarRating} from './StarRating';

export const MovieCard = ({element}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector(state => state.moviesReducer.genres);
  const {item} = element;
  const {title, id, poster_path, release_date, vote_average, genre_ids} = item;

  useEffect(() => {
    fetchGenreMovies(dispatch);
  }, [dispatch]);

  const findGenre = genreId => genres.find(el => el.id === genreId && el.name);

  const genreNames = genre_ids
    .map(el => findGenre(el).name)
    .filter((_genre, index) => index < 2);

  const releaseYear = release_date.slice(0, 4);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() =>
          history.push({
            pathname: `/details/${id}`,
            state: {id, genres: genreNames.join(' / '), releaseYear},
          })
        }>
        <View style={styles.card}>
          <Image
            style={styles.image}
            key={id}
            source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}}
            alt={`Cover of the movie ${title}`}
          />
          <View style={styles.content}>
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.paragraph}>{genreNames.join(' / ')}</Text>
              <Text style={styles.paragraph}>{releaseYear}</Text>
            </View>
            <StarRating rating={vote_average} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
  },
  touchable: {
    borderRadius: 10,
  },
  card: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'nowrap',
    width: 312,
    height: 168,
    padding: 8,
    backgroundColor: '#1B1C2A',
  },
  image: {
    backgroundColor: '#FFFFFF',
    width: 118,
    height: 168,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
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
