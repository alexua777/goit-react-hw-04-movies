import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../views/HomePage";
import MovieDetailsPage from "../views/MovieDetailsPage";
import route from "../router";
import Navigation from "./Navigation";
import Cast from "../views/Cast";

const App = () => (
  <>
    <Navigation />
    <Switch>
      <Route path={route.home} exact component={HomePage} />
      <Route path={route.movieId} exact component={MovieDetailsPage} />
      <Route path={route.cast} component ={Cast}/>
      
    </Switch>
  </>
);

export default App;
