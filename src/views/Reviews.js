import React, { Component } from "react";

const Reviews = ({ reviews }) => {
  console.log(reviews);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.results.map(e => (
            <li key={e.id}>
                <p>{e.aurthor}</p>{e.content}</li>
          ))}
        </ul>
      )}
      <h2>Reviews</h2>
    </>
  );
};

export default Reviews;