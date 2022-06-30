import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  let user = localStorage.getItem("username");
  console.log(user);
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      {localStorage.getItem("token") ? (
        <Navbar bg="white" variant="dark">
          <Container>
            <Navbar.Brand
              href="home"
              style={{ color: "green", fontWeight: "bold", fontSize: "60 px" }}
            >
              BlogPost
            </Navbar.Brand>
            <Nav className="menu-item">
              <Link to="/">Home</Link>

              {/* <Link to={`/profile/${user}`}>{user} </Link> */}
              <Link to="/articlePublish">New Article </Link>
              <Link to="/Setting">Setting </Link>
              <Link to={`userProfile/${user}`}>{user}</Link>

              <Link to="/logout" onClick={logout}>
                Logout
              </Link>
            </Nav>
          </Container>
          {/* <NavDropdown title={user}>
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown> */}
        </Navbar>
      ) : (
        <Navbar bg="white" variant="dark">
          <Container>
            <Navbar.Brand
              href="home"
              style={{ color: "green", fontWeight: "bold", fontSize: "40 px" }}
            >
              BlogPost
            </Navbar.Brand>

            <Nav className="menu-item">
              <Link to="/">Home</Link>
              <Link to="/signin">Sign In</Link>
              <Link to="/signup">Sign Up </Link>
            </Nav>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default Header;
