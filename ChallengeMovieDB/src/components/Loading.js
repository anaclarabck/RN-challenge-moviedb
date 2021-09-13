import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    backgroundColor: '#070818',
    height: '100%',
  },
  loading: {
    top: '50%',
  },
});
