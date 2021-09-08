import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
// import {Icon} from 'react-native-vector-icons/Icon';

export const Footer = () => {
  return (
    <View style={styles.container}>
      <Text>Things</Text>
      {/* <Icon name="home-outline" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
