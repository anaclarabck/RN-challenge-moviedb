import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';

export const StarRating = ({rating, top}) => {
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
    <View style={top ? styles.containerBlue : styles.container}>
      {stars}
      <Text
        style={
          top ? styles.textBlue : styles.text
        }>{`${ratingRounded}/5`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252634',
    borderRadius: 4,
    width: 116,
    height: 24,
  },
  containerBlue: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F8CFF',
    borderRadius: 4,
    width: 116,
    height: 24,
  },
  image: {
    width: 12,
    height: 12,
    marginRight: 4.5,
  },
  text: {
    marginLeft: 2,
    fontSize: 12,
    color: '#CDCED1',
  },
  textBlue: {
    marginLeft: 2,
    fontSize: 12,
    color: '#CCE5FF',
  },
});
