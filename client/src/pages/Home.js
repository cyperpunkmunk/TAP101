import React from "react";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import About from "../components/About";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Home = () => {
  return (
    <Wrapper>
        <Jumbotron />
        <About />
        <Login />
        <Signup />
    </Wrapper>
  );
};

export default Home;