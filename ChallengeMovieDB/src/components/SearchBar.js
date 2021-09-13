import React, {useEffect, useState} from 'react';
import {View, TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {searchMovies, setFilteredMovies} from '../actions';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const movies = useSelector(state => state.moviesReducer.movies);

  useEffect(() => {
    const find = async () => {
      if (query) {
        await searchMovies(query, dispatch);
      } else {
        dispatch(setFilteredMovies(movies));
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
          onChangeText={value => setQuery(value)} // value é necessário?
        />
        {/* <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.input} onPress={() => searchMovie(query)}>
            O
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  inputContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    fontSize: 25,
    color: 'black',
    borderRadius: 5,
  },
  searchButton: {
    marginHorizontal: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
