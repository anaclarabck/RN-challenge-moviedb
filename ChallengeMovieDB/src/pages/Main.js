import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {MovieList} from '../components/MovieList';
import {SearchBar} from '../components/SearchBar';

export const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Top Movies</Text>
        <SearchBar />
      </View>
      <View>
        <MovieList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    margin: 'auto',
    backgroundColor: 'blue',
  },
  header: {
    // marginTop: 30,
    // flex: 1,
  },
  title: {
    fontSize: 30,
  },
});
