import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
const NewArticle = () => {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});
  let token = localStorage.getItem("token");

  const publishArticle = (article) => {
    fetch("https://api.realworld.io/api/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        article: {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: [article.tag],
        },
      }),
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        navigate("/");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(publishArticle)}>
        {/* <div className="card"> */}
        <div className="container">
          <div className="row">
            <h1 style={{ color: "green", textAlign: "center" }}>New Article</h1>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Article Title"
              {...register("title")}
            ></input>

            <input
              type="text"
              className="form-control"
              placeholder="aboutArticle"
              name="description"
              {...register("description")}
            ></input>

            <textarea
              style={{ height: "20vh" }}
              placeholder="Short bio about you"
              className="form-control"
              name="body"
              {...register("body")}
            ></textarea>

            <input
              type="text"
              className="form-control"
              placeholder="email"
              name="email"
              {...register("email")}
            ></input>
            <input
              type="text"
              className="form-control"
              placeholder="new tag"
              name="tag"
              {...register("tag")}
            ></input>

            <button className="btn btn-primary" type="submit">
              Publish Article
            </button>
          </div>
        </div>
        {/* </div> */}
      </form>
    </>
  );
};

export default NewArticle;
