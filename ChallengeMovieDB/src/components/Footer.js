import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export const Footer = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/homeWhite.png')} />
      <Image source={require('../assets/trophyWhite.png')} />
      <Image source={require('../assets/movieWhite.png')} />
      <Image source={require('../assets/chartWhite.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    height: 100,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1B1C2A',
    paddingTop: 5,
    paddingHorizontal: 30,
  },
});
