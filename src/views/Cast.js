import React, { Component } from "react";

const Cast = ({ cast }) => {
  console.log(cast);

  return (
    <>
      {cast && (
        <ul>
          {cast.cast.map(e => (
            <li key={e.cast_id}>
              <img src={`https://image.tmdb.org/t/p/w500${e.profile_path}`}/>
              <p>{e.character}</p>
              </li>
          ))}
        </ul>
      )}
      <h2>Cast </h2>
    </>
  );
};

export default Cast;
