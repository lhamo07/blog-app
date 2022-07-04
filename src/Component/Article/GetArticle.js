// import React, { useEffect, useState } from "react";
// const GetArticle = () => {
//   const [article, setArticle] = useState([]);
//   // const slug = localStorage.getItem("slug");
//   let token = localStorage.getItem("token");

//   const getArticle = async () => {
//     await fetch("https://api.realworld.io/api/articles", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((response) => {
//         setArticle(response.articles);
//         console.log("getArticle", response);
//       });
//   };

//   useEffect(() => {
//     getArticle();
//   }, []);
//   return (
//     <>
//       <div>
//         {article.map((user, index) => (
//           <div className="user" key={index}>
//             <img
//               style={{ borderRadius: "50%" }}
//               src={"https://static.productionready.io/images/smiley-cyrus.jpg"}
//             />
//             <h4> {user.author.username}</h4>
//             <p>{user.createdAt}</p>
//             <h5>{user.title}</h5>
//             <p>{user.description}</p>
//             <p>{user.favoritedCount}</p>
//             <p>{user.slug}</p>

//             <hr />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default GetArticle;
