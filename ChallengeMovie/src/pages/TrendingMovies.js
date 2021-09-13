import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Loading} from '../components/Loading';

export const TrendingMovies = () => {
  const [showingSearch, setShowingSearch] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

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
  icon: {
    height: 24,
    resizeMode: 'contain',
    width: 24,
  },
});
