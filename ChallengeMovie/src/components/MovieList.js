import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {MovieCard} from './MovieCard';

const flatListItemSeparator = () => {
  return <View style={styles.separator} />;
};

export const MovieList = () => {
  const genres = useSelector(state => state.movies.genres);
  const filteredMovies = useSelector(state => state.movies.filteredMovies);
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
    width: '88%',
  },
  separator: {
    height: 16,
    width: '100%',
  },
});
