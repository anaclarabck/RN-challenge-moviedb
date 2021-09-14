import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {useHistory} from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {movieDetailsApi} from '../services/movieDetailsApi';
import {StarRating} from '../components/StarRating';
import {Loading} from '../components/Loading';
import {filterMovies} from '../actions';
import {MovieCard} from '../components/MovieCard';

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

const flatListItemSeparator = () => {
  return <View style={styles.separator} />;
};

export const MovieDetails = ({location}) => {
  const {
    state: {id, genres, releaseYear},
  } = location;
  const history = useHistory();
  const dispatch = useDispatch();
  const filteredMovies = useSelector(state => state.movies.filteredMovies);
  const topMovie = useSelector(state => state.movies.topMovie);
  const genresState = useSelector(state => state.movies.genres);
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(true);
  const {poster_path, title, overview, runtime, vote_average} = movie;
  const movieDuration = `${Math.floor(runtime / 60)}h ${runtime % 60}m`;
  const subTitle = `${releaseYear} • ${genres} • ${movieDuration}`;

  useEffect(() => {
    const getMovieDetails = async () => {
      const response = await movieDetailsApi(id); // movieDetailsApi: fetch movie details of Api, to get information we don't have in the trending movies Api
      await setMovie(response);
      await dispatch(filterMovies(id)); // filterMovies: it filters trending movies to render all of them except the current opened
      setLoading(false);
    };
    getMovieDetails();
  }, [id]);

  // useLayoutEffect: it changes the loading state before the useEffect, making the user see the Loading page instead of the rendering
  // (it makes sense when the user press at another card inside of the MovieDetails page)
  useLayoutEffect(() => {
    return () => {
      setLoading(true);
    };
  }, [id]);

  const Details = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => history.push('/')}>
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
      </>
    );
  };

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
          {filteredMovies.length > 0 && genresState.length > 0 && (
            <View style={styles.movielist}>
              <FlatList
                nestedScrollEnabled
                data={filteredMovies}
                ListHeaderComponent={<Details />}
                renderItem={item => <MovieCard element={item} />}
                ItemSeparatorComponent={flatListItemSeparator}
                keyExtractor={(item, index) => index.toString()}
                initialNumToRender={7}
              />
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
    resizeMode: 'cover',
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
    // fontFamily: 'Inter',
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
    // fontFamily: 'Inter',
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 32,
    paddingBottom: 5,
  },
  subtitle: {
    // fontFamily: 'Inter',
    color: '#CDCED1',
    fontSize: 12,
    paddingBottom: 16,
  },
  overview: {
    // fontFamily: 'Inter',
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
    // fontFamily: 'Inter',
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
  separator: {
    height: 16,
    width: '100%',
  },
});
