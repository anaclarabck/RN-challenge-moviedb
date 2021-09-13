import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useHistory} from 'react-router-native';

export const Footer = ({page}) => {
  const history = useHistory();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => history.push('/home')}>
        <Image
          style={page === 'home' ? styles.currentIcon : styles.icon}
          source={require('../assets/homeWhite.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push('/')}>
        <Image
          style={page === 'trending' ? styles.currentIcon : styles.icon}
          source={require('../assets/trophyWhite.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push('/trailers')}>
        <Image
          style={page === 'trailers' ? styles.currentIcon : styles.icon}
          source={require('../assets/movieWhite.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push('/popular')}>
        <Image
          style={page === 'popular' ? styles.currentIcon : styles.icon}
          source={require('../assets/chartWhite.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#1B1C2A',
    bottom: 0,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'space-between',
    left: 0,
    paddingHorizontal: 30,
    paddingTop: 5,
    position: 'absolute',
    right: 0,
  },
  icon: {
    height: 24,
    resizeMode: 'contain',
    width: 24,
  },
  currentIcon: {
    height: 24,
    resizeMode: 'contain',
    tintColor: '#1F8CFF',
    width: 24,
  },
});
