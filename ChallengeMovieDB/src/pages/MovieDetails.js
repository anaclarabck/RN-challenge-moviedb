import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useHistory} from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {movieDetailsApi} from '../services/movieDetailsApi';
import {StarRating} from '../components/StarRating';
import {MovieList} from '../components/MovieList';
import {filterMovies} from '../actions';

export const MovieDetails = ({location}) => {
  const history = useHistory();
  const {
    state: {id, genres, releaseYear},
  } = location;
  const [movie, setMovie] = useState('');
  const {poster_path, title, overview, runtime, vote_average} = movie;
  const movieDuration = `${Math.floor(runtime / 60)}h ${runtime % 60}m`;
  const subTitle = `${releaseYear} • ${genres} • ${movieDuration}`;
  const filteredMovies = useSelector(
    state => state.moviesReducer.filteredMovies,
  );
  const genresState = useSelector(state => state.moviesReducer.genres);

  useEffect(() => {
    const getMovieDetails = async () => {
      const response = await movieDetailsApi(id);
      setMovie(response);
      filterMovies(id);
    };
    console.log('MovieDetails');
    getMovieDetails();
  }, [id]);

  return movie ? (
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
          {/* <TouchableOpacity onPress={() => history.push('/trending')}>
            <Image
              style={styles.image}
              source={require('../assets/backWhite.png')}
            />
          </TouchableOpacity> */}
          <ScrollView>
            <TouchableOpacity onPress={() => history.push('/trending')}>
              <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
            <View style={styles.details}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subTitle}</Text>
              <Text style={styles.overview}>{overview}</Text>
              <StarRating rating={vote_average} />
            </View>
            <View style={styles.movielist}>
              <Text style={styles.trending}>Also trending</Text>
              {filteredMovies.length > 0 && genresState.length > 0 && (
                <MovieList />
              )}
            </View>
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </View>
  ) : (
    <Text>Carregando...</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  details: {
    marginTop: 208,
    marginLeft: 72,
    marginRight: 24,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 32,
    paddingBottom: 5,
  },
  subtitle: {
    fontFamily: 'Inter',
    color: '#CDCED1',
    fontSize: 12,
    paddingBottom: 16,
  },
  overview: {
    fontFamily: 'Inter',
    color: '#FFFFFF',
    fontSize: 14,
    paddingBottom: 16,
  },
  movielist: {
    // alignItems: 'center',
    alignContent: 'center',
    marginHorizontal: 20,
  },
  trending: {
    fontWeight: 'bold',
    fontFamily: 'Inter',
    color: '#FFFFFF',
    fontSize: 24,
    paddingBottom: 8,
  },
  lineargradient: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  back: {
    color: '#FFFFFF',
  },
});
