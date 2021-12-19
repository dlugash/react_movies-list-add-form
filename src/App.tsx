/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import moviesFromServer from './api/movies.json';

interface State {
  movies: Movie[];
}

export class App extends React.Component<{}, State> {
  state: State = {
    movies: moviesFromServer,
  };

  addMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
  };

  render() {
    // eslint-disable-next-line no-console
    console.log(this.state.movies);

    const { movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          <NewMovie />
        </div>
      </div>
    );
  }
}
