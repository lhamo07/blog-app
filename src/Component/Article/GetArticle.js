import React, { useEffect, useState } from "react";
const GetArticle = () => {
  const [article, setArticle] = useState([]);
  // const slug = localStorage.getItem("slug");
  const getArticle = () => {
    fetch(`https://api.realworld.io/api/articles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
      })
      .then((response) => {
        setArticle(response.article);
        console.log("getArticle", response.article);
      });
  };

  useEffect(() => {
    getArticle();
  });
  return (
    <>
      <h1></h1>
    </>
  );
};

export default GetArticle;
