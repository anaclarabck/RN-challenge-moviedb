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
    alignItems: 'center',
    alignContent: 'center',
    height: '100%',
    backgroundColor: '#007CFF',
  },
  image: {
    top: '40%',
  },
});
