import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {useHistory} from 'react-router-native';

export const MovieDetails = ({location: {state}}) => {
  const {item} = state;
  const history = useHistory();
  console.log(item);
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => history.push('/')}>
        <Text>Back</Text>
      </TouchableHighlight>
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
