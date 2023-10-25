import React from "react";
import "./Admin.scss";

const AccountContent = (props) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{props.h3}</h3>
        <p className="account-amount">{props.pamount}</p>
        <p className="account-amount-description">{props.pdescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">{props.button}</button>
      </div>
    </section>
  );
};

export default AccountContent;
