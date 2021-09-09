import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {MovieCard} from './MovieCard';
import {useSelector} from 'react-redux';
import {fetchTrendingMovies, fetchGenreMovies} from '../actions';

export const MovieList = props => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.moviesReducer.movies);
  const genres = useSelector(state => state.moviesReducer.genres);

  useEffect(() => {
    fetchTrendingMovies(dispatch);
    fetchGenreMovies(dispatch);
  }, [dispatch]);

  return (
    movies.length > 0 &&
    genres.length > 0 && (
      <View style={styles.container}>
        <FlatList
          data={movies}
          renderItem={item => <MovieCard element={item} />}
          // keyExtraction={item => item.id}
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    // backgroundColor: 'red',
  },
});
