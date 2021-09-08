import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

export const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Logo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    margin: 'auto',
    backgroundColor: 'blue',
  },
});
