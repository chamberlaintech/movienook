import React from "react";
import { RingLoader } from "react-spinners";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loader">
      <RingLoader color="#D90245" size={100} />;
    </div>
  );
};

export default Loading;
