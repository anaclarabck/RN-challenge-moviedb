import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Footer} from '../components/Footer';

export const PopularMovies = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coming Next...</Text>
      <Footer />
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
    top: '40%',
    fontSize: 32,
    fontFamily: 'Inter',
    color: '#FFFFFF',
  },
});