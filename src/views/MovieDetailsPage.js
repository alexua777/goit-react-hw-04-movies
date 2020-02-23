import React, { Component } from "react";
import movieAPI from "../service/movie-api";
import { Link} from "react-router-dom";
import router from "../router";
import Cast from './Cast';

export default class MovieDetailsPage extends Component {
  state = {
    movie: null
  };


  componentDidMount() {
    movieAPI
      .fetchMovieDertailsId(this.props.match.params.movieId)
      .then(movie => this.setState({ movie }));
  }


  render() {
    console.log(this.state.movie);

    return (
      <div>
        <button>
          <Link to={router.home}>Back</Link>
        </button><br></br>

        {this.state.movie && (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w500${this.state.movie.backdrop_path}`}
            />
            <div>
              <h3>{this.state.movie.title}</h3>
              <p>User score:{this.state.movie.popularity} %</p>
              <h4>Overview</h4>
              {this.state.movie.overview}
              <h4>Genres</h4>
              <ul>
                {this.state.movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>

              <p>Additional Information</p>
                {/* <Cast /> */}
            </div>
          </>
        )}
      </div>
    );
  }
}
