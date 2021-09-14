import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {MovieCard} from './MovieCard';

const flatListItemSeparator = () => {
  return <View style={styles.separator} />;
};

export const MovieList = () => {
  const genres = useSelector(state => state.genres.genres);
  const filteredMovies = useSelector(state => state.movies.filteredMovies);
  const moviesFound = useSelector(state => state.movies.moviesFound);
  const errorStatusTrending = useSelector(
    state => state.movies.errorStatusTrending,
  );
  const errorStatusSearch = useSelector(
    state => state.movies.errorStatusSearch,
  );
  const errorTrending = useSelector(state => state.movies.errorTrending);
  const errorStatusGenre = useSelector(state => state.genres.errorStatusGenre);
  const errorGenre = useSelector(state => state.genres.errorGenre);
  const error =
    errorStatusTrending ||
    errorStatusSearch ||
    errorStatusGenre ||
    errorTrending ||
    errorGenre;

  if (!moviesFound) {
    return (
      // when there isn't any movie in the query
      <Text style={styles.text}>Your search did not find any movie :(</Text>
    );
  } else if (error) {
    // for status response 401 or 404, and for errors in fetching
    return <Text style={styles.text}>Bad request, try again later :(</Text>;
  }
  return (
    filteredMovies.length > 0 &&
    genres.length > 0 && (
      <View style={styles.container}>
        <FlatList
          data={filteredMovies}
          renderItem={item => <MovieCard element={item} />}
          ItemSeparatorComponent={flatListItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          initialNumToRender={7}
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 135,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 50,
  },
  separator: {
    height: 16,
    width: '100%',
  },
});
