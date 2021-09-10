import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Footer} from '../components/Footer';
import {MovieList} from '../components/MovieList';
import {SearchBar} from '../components/SearchBar';

export const TrendingMovies = () => {
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
      <View style={styles.cardlist}>
        <MovieList />
      </View>
      <Footer />
    </View>
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
