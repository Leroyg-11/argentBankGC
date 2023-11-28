import React, { useState } from "react";
import axios from "axios";
import { hostName } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { profileUser } from "../../_store/profileSlice";
import "./UserEdit.scss";

const UserEdit = ({ setIsUserEditVisible }) => {
  const [newUserName, setNewUserName] = useState("");
  const getToken = useSelector((state) => state.user.user);
  const [freshUserName, setFreshUserName] = useState("");
  const dispatch = useDispatch();

  const profileData = useSelector((state) => state.profile.user);

  const [usernameLength, setUsernameLength] = useState(0);
  const [infoError, setInfoError] = useState("");
  const handleUserNameChange = (e) => {
    const inputValue = e.target.value;

    if (/^[a-zA-Z]+$/.test(inputValue) || inputValue === "") {
      setUsernameLength(inputValue.length);
      setNewUserName(inputValue);
    }
  };

  const handleUserNameUpdate = () => {
    axios
      .put(
        `${hostName}/user/profile`,
        { userName: newUserName },
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      )
      .then((response) => {
        setFreshUserName(response.data.body.userName);
        dispatch(profileUser(getToken));
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la mise à jour du nom d'utilisateur",
          error
        );
      });
  };

  const hideEdit = () => {
    setIsUserEditVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usernameLength < 3) {
      setInfoError("Username must contain at least 3 characters.");
    } else if (newUserName.trim() === "") {
      setInfoError("Username cannot be empty.");
    } else {
      handleUserNameUpdate();
    }
  };

  return (
    <main className="main bg-dark user-edit">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Edit user info</h1>
        <form onSubmit={handleSubmit}>
          <div className="edit-wrapper">
            <div className="edit-input">
              <label htmlFor="username">User name:</label>
              <input
                id="username"
                type="text"
                value={newUserName}
                onChange={handleUserNameChange}
              />
            </div>

            <div className="edit-input">
              <label htmlFor="username">Fist name:</label>

              <input
                type="text"
                name="pseudo"
                value={profileData ? profileData.firstName : ""}
                disabled="disabled"
              />
            </div>
            <div className="edit-input">
              <label htmlFor="username">Last name:</label>

              <input
                type="text"
                name="pseudo"
                value={profileData ? profileData.lastName : ""}
                disabled="disabled"
              />
            </div>
          </div>
          <div>{infoError}</div>
          <div className="button-container">
            <button type="submit" className="save-button">
              Save
            </button>
            <button onClick={hideEdit} type="button" className="cancel-button">
              Cancel
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default UserEdit;
