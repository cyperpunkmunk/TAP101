import React from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import About from "../components/About";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Home = () => {
  return (
    <Wrapper>
        <Nav />
        <About />
        <Login />
        <Signup />
    </Wrapper>
  );
};

export default Home;