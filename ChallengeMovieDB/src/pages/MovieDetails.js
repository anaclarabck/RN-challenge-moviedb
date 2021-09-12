import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useHistory} from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {movieDetailsApi} from '../services/movieDetailsApi';
import {StarRating} from '../components/StarRating';
import {MovieList} from '../components/MovieList';
import {Loading} from '../components/Loading';
import {filterMovies} from '../actions';

const TopMovieTitle = () => {
  return (
    <View style={styles.topmovie}>
      <Text style={styles.toptext}>Top movie of the week</Text>
      <Image
        style={styles.topicon}
        source={require('../assets/goldMedal.png')}
      />
    </View>
  );
};

export const MovieDetails = ({location}) => {
  const {
    state: {id, genres, releaseYear},
  } = location;
  const history = useHistory();
  const dispatch = useDispatch();
  const filteredMovies = useSelector(
    state => state.moviesReducer.filteredMovies,
  );
  const topMovie = useSelector(state => state.moviesReducer.topMovie);
  const genresState = useSelector(state => state.moviesReducer.genres);
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(true);
  const {poster_path, title, overview, runtime, vote_average} = movie;
  const movieDuration = `${Math.floor(runtime / 60)}h ${runtime % 60}m`;
  const subTitle = `${releaseYear} • ${genres} • ${movieDuration}`;

  useEffect(() => {
    const getMovieDetails = async () => {
      const response = await movieDetailsApi(id);
      await setMovie(response);
      await dispatch(filterMovies(id));
      setLoading(false);
    };
    console.log('MovieDetails');
    getMovieDetails();
  }, [id]);

  useLayoutEffect(() => {
    return () => {
      setLoading(true);
    };
  }, [id]);

  return loading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}}>
        <LinearGradient
          colors={[
            'rgba(20, 23, 51, 0.0001)',
            'rgba(9, 11, 25, 0.92)',
            'rgba(9, 10, 23, 1)',
          ]}
          style={styles.lineargradient}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => history.push('/trending')}>
            <Image
              style={styles.icon}
              source={require('../assets/backWhite.png')}
            />
          </TouchableOpacity>
          {id === topMovie && <TopMovieTitle />}
          <View style={styles.details}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subTitle}</Text>
            <Text style={styles.overview}>{overview}</Text>
            <StarRating rating={vote_average} />
          </View>
          <Text style={styles.trending}>Also trending</Text>
          {filteredMovies.length > 0 && genresState.length > 0 && (
            <View style={styles.movielist}>
              <MovieList />
            </View>
          )}
        </LinearGradient>
      </ImageBackground>
    </View>
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
  touchable: {
    position: 'absolute',
    top: 44.5,
    left: 22.5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  topmovie: {
    position: 'absolute',
    top: 184,
    left: 24,
  },
  toptext: {
    color: '#CDCED1',
    fontFamily: 'Inter',
    fontSize: 14,
  },
  topicon: {
    marginTop: 8,
    height: 38,
    width: 32,
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
    alignContent: 'center',
    alignItems: 'center',
  },
  trending: {
    marginLeft: 24,
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
});
