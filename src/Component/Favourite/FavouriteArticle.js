import React, { useState } from "react";

const FavouriteArticle = () => {
  let token = localStorage.getItem("token");
  let slug = localStorage.getItem("slug");
  fetch(`https://api.realworld.io/api/articles/${slug}/favorite`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      response.json();
    })
    .then((res) => {});
  return (
    <div>
      FavouriteArticle
      <button className="btn btn-primary" type="button"></button>
    </div>
  );
};

export default FavouriteArticle;
