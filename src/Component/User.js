// import React from "react";
// let token = localStorage.getItem("token");
// let username = localStorage.getItem("username");
// console.log("token", token);
// const User = () => {
//   fetch("https://api.realworld.io/api/user", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   }).then((res) => {
//     res.json();
//   });
//   // const updateUser = (user) => {
//   //   fetch("https://api.realworld.io/api/user", {
//   //     method: "PUT",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       Authorization: `Bearer ${token}`,
//   //     },
//   //     body: JSON.stringify({
//   //       user: {
//   //         email: user.email,
//   //         token: user.token,
//   //         username: user.username,
//   //         bio: user.bio,
//   //         image: user.image,
//   //       },
//   //     }),
//   //   })
//   //     .then((res) => {
//   //       res.json();
//   //     })
//   //     .then((response) => {
//   //       console.log("email", response);
//   //     });
//   // };

//   return (
//     <div>
//       <h1>{username}</h1>
//       <h1>Your Setting</h1>
//     </div>
//   );
// };

// export default User;
