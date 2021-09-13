import React from 'react';
import {Provider} from 'react-redux';
import {NativeRouter, Route} from 'react-router-native';
import store from './src/store';
import {TrendingMovies} from './src/pages/TrendingMovies';

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Route exact path="/" component={TrendingMovies} />
      </NativeRouter>
    </Provider>
  );
}
