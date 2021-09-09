import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {StyleSheet} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {MovieCard} from './MovieCard';
import {useSelector} from 'react-redux';
import {fetchGenreMovies, fetchTrendingMovies} from '../actions';
// import {fetchApiThunk} from '../actions';

export const MovieList = props => {
  const movies = useSelector(state => state.moviesReducer.movies);
  const isLoading = useSelector(state => state.moviesReducer.isLoading);
  const genres = useSelector(state => state.moviesReducer.genres);

  const dispatch = useDispatch();
  useEffect(() => {
    fetchTrendingMovies(dispatch);
    fetchGenreMovies(dispatch);
  }, [dispatch]);

  return (
    movies.length > 0 && (
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
    textAlign: 'center',
    margin: 'auto',
    backgroundColor: 'red',
  },
});
