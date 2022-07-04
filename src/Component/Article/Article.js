import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Article = () => {
  const [articleFeed, setArticleFeed] = useState([]);
  let token = localStorage.getItem("token");
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm({});
  // const publishArticle = () => {
  const getArticleFeed = () => {
    fetch("https://api.realworld.io/api/articles/feed", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setArticleFeed(response);
        console.log("a", response);
      });
  };
  useEffect(() => {
    getArticleFeed();
  }, []);

  return (
    <>
      <h1>hello</h1>
    </>
  );
};

export default Article;
