import { yupResolver } from "@hookform/resolvers/yup";
// import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const SignIn = () => {
  let navigate = useNavigate();
  // const [email, setEmail] = useState(" ");
  // const [password, setPassword] = useState("");
  const schema = yup
    .object()
    .shape({
      email: yup.string().required(),
      password: yup.string().required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const logIn = async (user) => {
    console.log("clicked");
    await fetch("https://api.realworld.io/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: user.email,
          password: user.password,
        },
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        const token = response.user.token;
        if (token) {
          localStorage.setItem("token", response.user.token);
          localStorage.getItem(token);
          navigate("/profile");
        }
        localStorage.setItem("username", response.user.username);

        console.log("token", token);
      })

      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(logIn)}>
          <h1 style={{ color: "green", textAlign: "center" }}>Sign In</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              {...register("email", { required: true })}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              {...register("password", { required: true })}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          {/* <a href="#" onClick={() => navigate("signup")}>
            Already have account? Sign Up
          </a> */}
          <Link to="/signup">Need an account?</Link>
        </Form>
      </Container>
    </div>
  );
};

export default SignIn;
