import React, {useEffect, useState} from 'react';
import {View, TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {searchMovies, setFilteredMovies} from '../actions/moviesActions';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const trendingMovies = useSelector(state => state.movies.trendingMovies);

  // the search happens when the value is changed. When the input is empty, set MovieList with trendingMovies
  useEffect(() => {
    const find = async () => {
      if (query) {
        await searchMovies(query, dispatch);
      } else {
        dispatch(setFilteredMovies(trendingMovies));
      }
    };
    find();
  }, [query]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={query}
          placeholder="Search"
          onChangeText={value => setQuery(value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginTop: 16},
  inputContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    color: 'black',
    fontSize: 20,
    width: '88%',
  },
  searchButton: {
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 5,
  },
});
