import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';

export const StarRating = ({rating}) => {
  const ratingRounded = Math.round(rating / 2); // rating rounded 0 to 5
  let stars = [];
  for (let index = 1; index <= 5; index += 1) {
    let path = require('../assets/starFilled.png'); // set the path to filled stars
    if (index > ratingRounded) {
      path = require('../assets/starUnfilled.png'); // if ratings is lower, set the path to unfilled stars
    }
    stars.push(<Image style={styles.image} source={path} />);
  }
  return (
    <View style={styles.container}>
      {stars}
      <Text style={styles.text}>{`${ratingRounded}/5`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252634',
    borderRadius: 5,
    width: 125,
    padding: 4,
  },
  image: {
    width: 15,
    height: 15,
    marginRight: 3.5,
  },
  text: {
    fontSize: 12,
    color: '#CDCED1',
  },
});
