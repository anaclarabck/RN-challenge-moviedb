import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {MovieList} from '../components/MovieList';
import {SearchBar} from '../components/SearchBar';

export const Main = () => {
  const [showingSearch, setShowingSearch] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Top Movies</Text>
        <TouchableOpacity onPress={() => setShowingSearch(!showingSearch)}>
          <Image source={require('../assets/searchWhite.png')} />
        </TouchableOpacity>
      </View>
      {showingSearch && <SearchBar />}
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
    backgroundColor: '#070818',
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'nowrap',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Inter',
    color: '#FFFFFF',
  },
});
