import React, { Component } from "react";
import movieAPI from "../service/movie-api";


export default class Cast extends Component {
  state = {
    cast: null
  };

  componentDidMount() {
    movieAPI
      .fetchMovieCastDetails(this.props.match.params.movieId)
      .then(cast => this.setState({ cast }));
  }

  render() {
    console.log(this.state.cast);
    return (
      <ul>
        {this.state.cast.map(e => (
          <li key={e.id}>{e.id}</li>
        ))}
      </ul>
    
    );
  }
}
