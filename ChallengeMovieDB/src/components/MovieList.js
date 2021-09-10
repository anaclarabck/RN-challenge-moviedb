import React, {useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {MovieCard} from './MovieCard';
import {
  fetchTrendingMovies,
  fetchGenreMovies,
  setFilteredMovies,
} from '../actions';

export const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.moviesReducer.movies);
  const genres = useSelector(state => state.moviesReducer.genres);
  const filteredMovies = useSelector(
    state => state.moviesReducer.filteredMovies,
  );

  useEffect(() => {
    const fetchMoviesAndGenres = async () => {
      await fetchTrendingMovies(dispatch);
      await fetchGenreMovies(dispatch);
      setFilteredMovies(movies);
    };
    console.log('MovieList');
    fetchMoviesAndGenres();
  }, [dispatch]);

  return (
    filteredMovies.length > 0 &&
    genres.length > 0 && (
      <View style={styles.container}>
        <FlatList
          data={filteredMovies}
          renderItem={item => <MovieCard element={item} />}
          initialNumToRender={7}
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
