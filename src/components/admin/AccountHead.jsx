import React, { useState } from "react";
import "./Admin.scss";
import UserEdit from "./UserEdit";

const AccountHead = (props) => {
  const [isUserEditVisible, setIsUserEditVisible] = useState(false);

  const showEdit = () => {
    setIsUserEditVisible(true);
  };

  const hideEdit = () => {
    setIsUserEditVisible(false);
  };

  return (
    <article>
      <div className="header">
        <br />
        <h1>Welcome back</h1>

        <h1>{props.h1}</h1>

        {isUserEditVisible ? (
          <UserEdit setIsUserEditVisible={setIsUserEditVisible} />
        ) : (
          <button onClick={showEdit} className="edit-button">
            Edit Name
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
    </article>
  );
};

export default AccountHead;
