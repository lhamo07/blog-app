import React, { Profiler, useEffect } from "react";
import "./UserProfile.css";
const UserProfile = () => {
  let user = localStorage.getItem("username");

  const getUserProfile = () => {
    fetch(`https://api.realworld.io/api/profiles/${user}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      res.json();
    });
  };

  useEffect(() => {
    getUserProfile();
  });
  return (
    <>
      <div className="banner">
        <img
          style={{ borderRadius: "50%" }}
          src={
            user.image ||
            "https://static.productionready.io/images/smiley-cyrus.jpg"
          }
        />
        <h1></h1>
        <h4> {user}</h4>
      </div>
    </>
  );
};

export default UserProfile;
