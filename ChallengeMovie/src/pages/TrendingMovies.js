import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Loading} from '../components/Loading';
import {MovieList} from '../components/MovieList';
import {SearchBar} from '../components/SearchBar';
import {Footer} from '../components/Footer';
import {Splash} from '../components/Splash';
import {fetchGenreMovies} from '../actions/genresActions';
import {fetchTrendingMovies} from '../actions/moviesActions';

export const TrendingMovies = () => {
  const [showingSearch, setShowingSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const splashScreen = useSelector(state => state.movies.splashScreen);

  useEffect(() => {
    const fetchMoviesAndGenres = async () => {
      await fetchGenreMovies(dispatch);
      await fetchTrendingMovies(dispatch);
      setLoading(false);
    };
    fetchMoviesAndGenres();
  }, []);

  if (splashScreen) {
    return <Splash />;
  } else {
    return loading ? (
      <Loading />
    ) : (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Top Movies</Text>
          <TouchableOpacity onPress={() => setShowingSearch(!showingSearch)}>
            <Image
              style={styles.icon}
              source={require('../assets/searchWhite.png')}
            />
          </TouchableOpacity>
        </View>
        {showingSearch && <SearchBar />}
        <View style={styles.cardlist}>
          <MovieList />
        </View>
        <Footer page="trending" />
      </View>
    );
  }
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
    color: '#FFFFFF',
  },
  icon: {
    height: 24,
    resizeMode: 'contain',
    width: 24,
  },
  cardlist: {
    paddingTop: 24,
    alignItems: 'center',
  },
});
