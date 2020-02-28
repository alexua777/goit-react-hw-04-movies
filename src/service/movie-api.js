import axios from 'axios';
const baseURL = 'https://api.themoviedb.org/3';
const apiKEY = 'a7bb4a72ec1281f0f4fe4edcafecfadd';


const fetchQueryDetails = () => {

    return axios 
    .get(`${baseURL}/trending/all/day?api_key=${apiKEY}`)
    .then(res => res.data.results);
   
};

const fetchMovieDetailsWithQuery = (query) => {
    return axios 
   .get(`${baseURL}/search/movie?api_key=${apiKEY}&query=${query}`)
    .then(res => res.data.results);
   
};

const fetchMovieDertailsId = movieId  => {
    return fetch(`${baseURL}/movie/${movieId}?api_key=${apiKEY}`)
    .then(res => res.json());
};

const fetchMovieCastDetails = movieId  => {
    return fetch(`${baseURL}/movie/${movieId}/credits?api_key=${apiKEY}`)
    .then(res => res.json());
};

const fetchMovieReviewsDetails = movieId  => {
    return fetch(`${baseURL}/movie/${movieId}/reviews?api_key=${apiKEY}`)
    .then(res => res.json());
};

export default {fetchQueryDetails, fetchMovieDertailsId, fetchMovieCastDetails, fetchMovieReviewsDetails, fetchMovieDetailsWithQuery};