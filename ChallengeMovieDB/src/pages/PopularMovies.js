import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Footer} from '../components/Footer';
import {Loading} from '../components/Loading';

export const PopularMovies = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>Coming up...</Text>
      <Footer page="popular" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    height: '100%',
    margin: 'auto',
    backgroundColor: '#070818',
  },
  title: {
    top: '44%',
    fontSize: 32,
    fontFamily: 'Inter',
    color: '#FFFFFF',
  },
});
