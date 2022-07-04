import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import Moment from "moment";
import { Link } from "react-router-dom";
const Home = () => {
  const [articles, setArticle] = useState([]);
  let start = Date.now();

  let token = localStorage.getItem("token");
  const getArticle = async () => {
    await fetch("https://api.realworld.io/api/articles", {
      Method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("res", response);
        setArticle(response.articles);
        console.log(response.articles);
      });
  };

  useEffect(() => {
    getArticle();
  }, []);
  // console.log("aa", article);

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
        <div className="content">
          <hr style={{ marginTop: "50px" }} />
          {articles.map((user, index) => (
            <div className="user" key={index}>
              <img
                style={{
                  borderRadius: "50%",
                  maxWidth: "35px",
                  maxHeight: "35px",
                }}
                src={user.author.image}
              />
              <Link to="userProfile/:user"> {user.author.username}</Link>
              <p>{Moment(user.createdAt).format("MMMM Do YYYY")}</p>
              <h5>{user.title}</h5>
              <p>{user.description}</p>

              <p>{user.body}</p>
              {localStorage.setItem("slug", user.slug)}
              <p>{user.slug}</p>
              <span>Read more...</span>
              <div className="btn">
                <button className="btn btn-primary" type="button">
                  {user.favoritesCount}
                </button>
              </div>
              <ul className="tag">
                <li className="tagList">{user.tagList[0]}</li>
              </ul>

              <hr />
            </div>
          ))}
        </div>
        <div>
          <h1>{articles.title}</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
