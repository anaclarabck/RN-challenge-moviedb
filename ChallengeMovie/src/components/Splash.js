import React from 'react';
import {View, Image} from 'react-native';
import {StyleSheet} from 'react-native';

export const Splash = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/splash.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007CFF',
    height: '100%',
  },
  image: {
    top: '40%',
  },
});
