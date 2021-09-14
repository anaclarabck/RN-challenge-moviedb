import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';

export const StarRating = ({rating, isBlue = false}) => {
  const ratingRounded = Math.round(rating / 2); // rating rounded 0 to 5
  let stars = [];
  for (let index = 1; index <= 5; index += 1) {
    let path = require('../assets/starFilled.png'); // set the path to filled stars
    if (index > ratingRounded) {
      path = require('../assets/starUnfilled.png'); // if ratings is lower, set the path to unfilled stars
    }
    stars.push(<Image style={styles.image} source={path} key={index} />);
  }

  // different colors for different backgrounds
  return (
    <View style={isBlue ? styles.containerBlue : styles.container}>
      {stars}
      <Text
        style={
          isBlue ? styles.textBlue : styles.text
        }>{`${ratingRounded}/5`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#252634',
    borderRadius: 4,
    flexDirection: 'row',
    height: 24,
    justifyContent: 'center',
    width: 116,
  },
  containerBlue: {
    alignItems: 'center',
    backgroundColor: '#1F8CFF',
    borderRadius: 4,
    flexDirection: 'row',
    height: 24,
    justifyContent: 'center',
    width: 116,
  },
  text: {
    color: '#CDCED1',
    fontSize: 12,
    marginLeft: 2,
  },
  textBlue: {
    color: '#CCE5FF',
    fontSize: 12,
    marginLeft: 2,
  },
  image: {
    height: 12,
    marginRight: 4.5,
    width: 12,
  },
});
