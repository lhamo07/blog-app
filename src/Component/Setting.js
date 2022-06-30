import React, { useEffect } from "react";
import "./Setting.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Setting = () => {
  let token = localStorage.getItem("token");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});
  const updateUser = (user) => {
    fetch("https://api.realworld.io/api/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user: {
          email: user.email,
          token: user.token,
          username: user.username,
          bio: user.bio,
          image: user.image,
          password: user.password,
        },
      }),
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log("email", data.user.bio);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(updateUser)}>
        {/* <div className="card"> */}
        <div className="container">
          <div className="row">
            <h1 style={{ color: "green", textAlign: "center" }}>
              Your Setting
            </h1>
            <input
              type="text"
              className="form-control"
              name="updateInput"
              placeholder="url of profile picture"
              {...register("updateInput")}
            ></input>

            <input
              type="text"
              className="form-control"
              placeholder={"user.username"}
              name="username"
              {...register("username")}
            ></input>

            <textarea
              style={{ height: "20vh" }}
              placeholder="Short bio about you"
              className="form-control"
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
              placeholder="new password"
              name="password"
              {...register("password")}
            ></input>

            <button className="btn btn-primary" type="submit">
              Update
            </button>
          </div>
        </div>
        {/* </div> */}
      </form>
    </>
  );
};

export default Setting;
