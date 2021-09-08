import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Text>SearchBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
