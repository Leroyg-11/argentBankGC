import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Admin.scss";
import { useNavigate } from "react-router-dom";
import AccountContent from "./AccountContent";
import AccountHead from "./AccountHead";
import { profileUser } from "../../_store/profileSlice";

const Account = (props) => {
  const [profileData, setProfileData] = useState({});
  const dispatch = useDispatch();
  const getToken = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(profileUser(getToken));
  }, [dispatch, getToken]);

  const profileUserData = useSelector((state) => state.profile.user);

  return (
    <main className="main bg-dark">
      <AccountHead
        h1={
          `${profileUserData ? profileUserData.firstName : ""}` +
          " " +
          `${profileUserData ? profileUserData.userName : ""}` +
          " !"
        }
      />
      <AccountContent
        h3="Argent Bank Checking (x8349)"
        pamount="$2,082.79"
        pdescription="Available Balance"
        button="View transactions"
      />
      <AccountContent
        h3="Argent Bank Savings (x6712)"
        pamount="$10,928.42"
        pdescription="Available Balance"
        button="View transactions"
      />
      <AccountContent
        h3="Argent Bank Credit Card (x8349)"
        pamount="$184.30"
        pdescription="Current Balance"
        button="View transactions"
      />
    </main>
  );
};

export default Account;
