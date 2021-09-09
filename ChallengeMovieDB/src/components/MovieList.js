import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {StyleSheet} from 'react-native';
import {MovieCard} from './MovieCard';
// import {useDispatch, useSelector} from 'react-redux';
// import {fetchApiThunk} from '../actions';

export const MovieList = props => {
  const [movieList, setMovieList] = useState([]);
  // const movieListRedux = useSelector(state => state.movieList);

  const fetchApiMovieDB = async () => {
    const MOVIEDB_URL =
      'https://api.themoviedb.org/3/trending/movie/day?api_key=5e4dbaf48b58268cbff212cb6e5c98a0';
    try {
      const response = await fetch(MOVIEDB_URL);
      const {results} = await response.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await fetchApiMovieDB();
      setMovieList(movies);
    };
    fetchMovies();
  }, []);

  return (
    movieList.length > 0 && (
      <View style={styles.container}>
        <FlatList
          data={movieList}
          renderItem={item => <MovieCard element={item} />}
          // keyExtraction={item => item.id}
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    margin: 'auto',
    backgroundColor: 'red',
  },
});

// const mapStateToProps = state => ({
//   movieListState: state.movieList,
// });

// const mapDispatchToProps = dispatch => ({
//   ...bindActionCreators({fetchApiThunk}, dispatch),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CardList);
