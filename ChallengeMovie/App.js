import React from 'react';
import {Provider} from 'react-redux';
import {NativeRouter, Route} from 'react-router-native';
import store from './src/store';
import {TrendingMovies} from './src/pages/TrendingMovies';
import {MovieDetails} from './src/pages/MovieDetails';
import {Home} from './src/pages/Home';
import {TrailersMovies} from './src/pages/TrailersMovies';
import {PopularMovies} from './src/pages/PopularMovies';

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Route exact path="/" component={TrendingMovies} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/trailers" component={TrailersMovies} />
        <Route exact path="/popular" component={PopularMovies} />
        <Route exact path="/details/:id" component={MovieDetails} />
      </NativeRouter>
    </Provider>
  );
}
