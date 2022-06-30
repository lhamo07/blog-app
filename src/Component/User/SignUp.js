import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  let navigate = useNavigate();
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const schema = yup
    .object()
    .shape({
      username: yup.string().required(),
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
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

  const onSubmit = async (user, e) => {
    e.preventDefault();
    console.log("clicked");
    reset();

    await fetch("https://api.realworld.io/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: user.username,
          email: user.email,
          password: user.password,
        },
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("signup", response);
      })

      .catch((e) => {
        console.log(e);
      });

    // console.log(data);
  };

  // console.log("errors", errors);

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1 style={{ color: "green", textAlign: "center" }}>Sign Up</h1>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              // onChange={(e) => {
              //   setUsername(e.target.value);
              // }}
              {...register("username", { required: true })}
            />

            <small className="text-danger">{errors.username?.message}</small>

            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
              {...register("email", { required: true })}
            />
            <small className="text-danger">{errors.email?.message}</small>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="off"
              // onChange={(e) => {
              //   setPassword(e.target.value);
              // }}
              {...register("password", { required: true })}
            />
            <small className="text-danger">{errors.password?.message}</small>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Link to="/signin">Have an account?</Link>
        </Form>
      </Container>
    </div>
  );
};
export default SignUp;
