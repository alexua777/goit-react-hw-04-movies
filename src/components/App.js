import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./Layout";
import HomePage from "../views/HomePage";
import MovieDetailsPage from "../views/MovieDetailsPage";
import route from "../router";

import Cast from "../views/Cast";
import MoviesPage from "../views/MoviesPage";
import Reviews from "../views/Reviews";

const App = () => (
  <Layout>
    <Switch>
      <Route path={route.home} exact component={HomePage} />
      <Route path={route.movies} exact component={MoviesPage} />
      <Route path={route.movieId} exact component={MovieDetailsPage} />
      <Route path={route.cast} component={Cast} />
      <Route path={route.reviews} component={Reviews} />
    </Switch>
  </Layout>
);

export default App;
