import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Layout.scss";
import logo from "../../assets/NavBar/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../_store/userSlice";
import { profileUser } from "../../_store/profileSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate("/");
    dispatch(profileUser.pending());
  };

  const getToken = useSelector((state) => state.user.user);
  console.log("gettoken", getToken);

  const profileUserData = useSelector((state) => state.profile.user);

  useEffect(() => {
    dispatch(profileUser(getToken));
  }, [dispatch, getToken]);

  return (
    <div className="account-header">
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
        </Link>

        <h1 className="sr-only">Argent Bank</h1>

        <div className="nav-logged-container">
          <Link className="nav-info-user main-nav-item" to="/admin/dashboard/">
            <i className="fa fa-user-circle"></i>
            <p>{profileUserData ? profileUserData.userName : ""}</p>
          </Link>

          {getToken === null ||
          getToken === "Request failed with status code 400" ? (
            ((
              <Link className="nav-info-user main-nav-item" to="/">
                <i className="fa fa-user-circle"></i>
                <p>{profileUserData ? profileUserData.userName : ""}</p>
              </Link>
            ),
            (
              <Link to="/auth/login" className="main-nav-item">
                <div className="main-nav-item">
                  Sign in
                  <i className="fa fa-sign-out"></i>
                </div>
              </Link>
            ))
          ) : (
            <Link onClick={handleLogout} to="/" className="main-nav-item">
              <div className="main-nav-item">
                Sign Out
                <i className="fa fa-sign-out"></i>
              </div>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
