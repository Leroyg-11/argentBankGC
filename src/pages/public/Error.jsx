import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>
        Error 404 <br />
        <button className="error-button" onClick={redirect}>
          Back to home
        </button>
      </h1>
    </div>
  );
};

export default Error;
