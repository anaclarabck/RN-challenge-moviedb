import React from 'react';
import {Provider} from 'react-redux';
import {NativeRouter, Route} from 'react-router-native';
import store from './src/store';
import {TrendingMovies} from './src/pages/TrendingMovies';
import {MovieDetails} from './src/pages/MovieDetails';

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Route exact path="/" component={TrendingMovies} />
        <Route exact path="/details/:id" component={MovieDetails} />
      </NativeRouter>
    </Provider>
  );
}
