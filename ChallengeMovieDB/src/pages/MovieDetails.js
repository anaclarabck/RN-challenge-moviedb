import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useHistory} from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';

export const MovieDetails = ({location: {state}}) => {
  const history = useHistory();
  const {item, genreNames, releaseYear} = state;
  const {poster_path, title, overview} = item;
  const subTitle = `${releaseYear} • ${genreNames} •`;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        // resizeMode="cover"
        source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}}>
        <LinearGradient
          colors={[
            'rgba(20, 23, 51, 0.0001)',
            'rgba(9, 11, 25, 0.93)',
            '#090A17',
          ]}
          style={styles.lineargradient}>
          <TouchableHighlight onPress={() => history.push('/')}>
            <Text style={styles.text}>Back</Text>
          </TouchableHighlight>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>{subTitle}</Text>
          <Text style={styles.text}>{overview}</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

// rgba(9, 11, 25, 0.8806)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // textAlign: 'center',
    // margin: 'auto',
  },
  image: {
    flex: 1,
    // justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#FFFFFF',
  },
  lineargradient: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // opacity: 0.9,
    // backgroundColor: 'transparent',
  },
});
