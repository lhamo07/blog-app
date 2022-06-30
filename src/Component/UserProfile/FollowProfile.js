import React from "react";

const FollowProfile = () => {
  let user = localStorage.getItem("username");

  const followProfile = () => {
    fetch(`https://api.realworld.io/api/profiles/${user}/follow`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      res.json();
    });
  };
  fetch(() => {
    followProfile();
  });

  return <div>FollowProfile</div>;
};

export default FollowProfile;
