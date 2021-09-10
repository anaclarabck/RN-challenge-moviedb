import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useHistory} from 'react-router-native';

export const Footer = () => {
  const history = useHistory();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => history.push('/')}>
        <Image source={require('../assets/homeWhite.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push('/trending')}>
        <Image source={require('../assets/trophyWhite.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push('/trailers')}>
        <Image source={require('../assets/movieWhite.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push('/popular')}>
        <Image source={require('../assets/chartWhite.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1B1C2A',
    paddingTop: 5,
    paddingHorizontal: 30,
  },
});
