import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-native';
import {fetchGenreMovies} from '../actions';
import {StarRating} from './StarRating';

const goldMedal = () => {
  return (
    <View style={styles.goldMedal}>
      <Image
        style={styles.iconMedal}
        source={require('../assets/goldMedal.png')}
      />
      <Text style={styles.textMedal}>Top movie this week</Text>
    </View>
  );
};

export const MovieCard = ({element}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector(state => state.moviesReducer.genres);
  const topMovie = useSelector(state => state.moviesReducer.topMovie);
  const {item} = element;
  const {title, id, poster_path, release_date, vote_average, genre_ids} = item;

  useEffect(() => {
    fetchGenreMovies(dispatch);
    console.log('MovieCard');
    console.log(topMovie);
  }, [dispatch]);

  const findGenre = genreId => genres.find(el => el.id === genreId && el.name);

  const genreNames = genre_ids
    .map(el => findGenre(el).name)
    .filter((_genre, index) => index < 2);

  const releaseYear = release_date.slice(0, 4);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          history.push({
            pathname: `/details/${id}`,
            state: {id, genres: genreNames.join(' / '), releaseYear},
          })
        }>
        <View style={id === topMovie ? styles.topMovie : styles.card}>
          <Image
            style={styles.image}
            key={id}
            source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}}
          />
          <View style={styles.content}>
            <View>
              {id === topMovie && goldMedal()}
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.paragraph}>{genreNames.join(' / ')}</Text>
              <Text style={styles.paragraph}>{releaseYear}</Text>
            </View>
            {id === topMovie ? (
              <StarRating rating={vote_average} top={true} />
            ) : (
              <StarRating rating={vote_average} />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#070818',
    flex: 1,
    height: 168,
    width: 312,
  },
  card: {
    borderRadius: 8,
    backgroundColor: '#1B1C2A',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  image: {
    backgroundColor: '#070818',
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    height: 168,
    width: 118,
  },
  content: {justifyContent: 'space-between', margin: 16, width: 162},
  topMovie: {
    backgroundColor: '#007CFF',
    borderRadius: 8,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  goldMedal: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconMedal: {
    height: 24,
    marginRight: 5,
    resizeMode: 'contain',
    width: 24,
  },
  textMedal: {color: '#CCE5FF', fontSize: 14, fontWeight: '400'},
  title: {color: '#FFFFFF', fontSize: 16, paddingBottom: 4},
  paragraph: {color: '#CDCED1', fontSize: 12},
});
