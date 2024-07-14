import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-section">
      <div className="error-container">
        <h1 className="title">Uuuups... something went wrong</h1>
        <Link to="/" className="btn btn-back">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
