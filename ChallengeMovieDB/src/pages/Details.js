import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

export const Details = () => {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    margin: 'auto',
    backgroundColor: 'magenta',
  },
});
