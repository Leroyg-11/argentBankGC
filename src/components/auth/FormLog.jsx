import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../_store/userSlice";
import { useNavigate } from "react-router-dom";
import { profileUser } from "../../_store/profileSlice";
import "./formLog.scss";

const Login = () => {
  const [profileData, setProfileData] = useState({});
  const [email, setEmail] = useState("tony@stark.com");
  const [password, setPassword] = useState("password123");

  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = async (e) => {
    e.preventDefault();
    let userCredential = {
      email,
      password,
    };
    dispatch(loginUser(userCredential)).then((result) => {
      if (result.payload) {
        navigate("/admin/dashboard/");
        const token = result.payload;
        dispatch(profileUser(token)).then((res) => {
          if (res.payload) {
            const dataprof = res.payload;
            setProfileData(dataprof);
          }
        });
      } else {
        setErrorMessage(
          `${result.error.message}. Please try with a valide email and password`
        );
      }
    });
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLoginEvent}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              id="email"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text  "
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </section>
    </main>
  );
};

export default Login;
