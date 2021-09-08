import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

export const Cards = () => {
  return (
    <View style={styles.container}>
      <Text>Cards</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    margin: 'auto',
    backgroundColor: 'red',
  },
});
