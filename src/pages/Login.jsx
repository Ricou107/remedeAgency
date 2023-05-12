import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Form from "../components/Form";

const Login = () => {
  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
