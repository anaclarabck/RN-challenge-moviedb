import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.searchButton}>
          <Text>o</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  inputContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    fontSize: 25,
    color: 'black',
    borderRadius: 5,
  },
  searchButton: {
    marginHorizontal: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
