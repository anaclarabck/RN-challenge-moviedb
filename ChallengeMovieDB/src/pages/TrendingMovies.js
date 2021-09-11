import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchGenreMovies,
  fetchTrendingMovies,
  setFilteredMovies,
} from '../actions';
import {Footer} from '../components/Footer';
import {MovieList} from '../components/MovieList';
import {SearchBar} from '../components/SearchBar';
import {Splash} from './Splash';

export const TrendingMovies = () => {
  const [showingSearch, setShowingSearch] = useState(false);
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

  return filteredMovies.length > 0 && genres.length > 0 ? (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Top Movies</Text>
        <TouchableOpacity onPress={() => setShowingSearch(!showingSearch)}>
          <Image source={require('../assets/searchWhite.png')} />
        </TouchableOpacity>
      </View>
      {showingSearch && <SearchBar />}
      <View style={styles.cardlist}>
        <MovieList />
      </View>
      <Footer />
    </View>
  ) : (
    <Splash />
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    margin: 'auto',
    backgroundColor: '#070818',
    height: '100%',
  },
  header: {
    paddingTop: 31,
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'nowrap',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    color: '#FFFFFF',
  },
  cardlist: {
    paddingTop: 24,
  },
});
