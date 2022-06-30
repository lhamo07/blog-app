import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
const Home = () => {
  const [article, setArticle] = useState([]);

  // let token = localStorage.getItem("token");
  const getArticle = () => {
    fetch("https://api.realworld.io/api/articles", {
      Method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);

        setArticle(response.articles);
        console.log(response.articles);
      });
  };

  useEffect(() => {
    getArticle();
  }, []);
  console.log("aa", article);

  return (
    <>
      <div className="banner">
        <h1>Share Your Ideas!</h1>
        <h5>Sign up for free today</h5>
      </div>
      <div>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            textDecoration: "underline",
          }}
        >
          <li>
            <a href="Global Feed">Global Feed</a>
          </li>
          <li>
            <a href="Your Feed">Your Feed</a>
          </li>
        </ul>
        <hr style={{ marginTop: "50px" }} />
        {article.map((user) => (
          <div className="user" key={article.id}>
            <img style={{ borderRadius: "50%" }} src={user.author.image} />
            <h4> {user.author.username}</h4>
            <p>{user.createdAt}</p>
            <h5>{user.title}</h5>
            <p>{user.description}</p>
            <p>{user.favoritedCount}</p>
            <hr />
          </div>
        ))}
      </div>
      <div>
        <h1>{article.title}</h1>
      </div>
    </>
  );
};

export default Home;
