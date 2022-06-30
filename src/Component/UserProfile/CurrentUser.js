import React from "react";
import { useEffect } from "react";
const CurrentUser = () => {
  let token = localStorage.getItem("token");
  const getCurrentUser = () => {
    fetch("https://api.realworld.io/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      res.json();
    });
  };

  useEffect(() => {
    getCurrentUser();
  });
  return <div>CurrentUser</div>;
};

export default CurrentUser;
