import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Footer} from '../components/Footer';
import {Loading} from '../components/Loading';

export const TrailersMovies = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>Coming up...</Text>
      <Footer page="trailers" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#070818',
    alignItems: 'center',
    alignContent: 'center',
    height: '100%',
    margin: 'auto',
  },
  title: {
    color: '#FFFFFF',
    // fontFamily: 'Inter',
    fontSize: 32,
    top: '44%',
  },
});
