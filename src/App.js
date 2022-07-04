import "./App.css";
import Header from "./Component/Layout/Header";
import SignIn from "./Component/User/SignIn";
import SignUp from "./Component/User/SignUp";
import Error from "./Component/Error";
import Home from "./Component/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Profile from "./Component/User";
import UserProfile from "./Component/UserProfile/UserProfile";
import User from "./Component/User";
import Setting from "./Component/Setting";
import Article from "./Component/Article/Article";
import NewArticle from "./Component/Article/NewArticle";
import CurrentUser from "./Component/UserProfile/CurrentUser";
import GetArticle from "./Component/Article/GetArticle";
import FollowProfile from "./Component/UserProfile/FollowProfile";
import ProtectedRoute from "./ProtectedRoute";
import FavouriteArticle from "./Component/Favourite/FavouriteArticle";
import toast, { Toaster } from "react-hot-toast";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      {/* <Route element={<ProtectedRoute />}> */}
      {/* <Route path="user" element={<User />} /> */}
      <Route path="setting" element={<Setting />} />
      <Route path="articleFeed" element={<Article />} />
      {/* <Route path="/article" element={<GetArticle />} /> */}
      <Route path="followProfile/:user/follow" element={<FollowProfile />} />

      <Route path="/newArticle" element={<NewArticle />} />
      <Route path="userProfile/:user" element={<UserProfile />} />
      <Route path="user" element={<CurrentUser />} />
      <Route path="*" element={<Error />} />
      {/* </Route> */}
    </Routes>
  );
};
function App() {
  // export const UserContext=createContext();

  return (
    <BrowserRouter>
      <Header />

      <Toaster />
      {/* <Article /> */}
      {/* <UserProfile /> */}
      <FavouriteArticle />

      <Routing />
    </BrowserRouter>
  );
}

export default App;
