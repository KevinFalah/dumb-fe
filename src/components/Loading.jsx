import React from "react";
import LoadingImage from "../Images/loading.gif";

function Notfound() {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center" style={{height: "80vh"}}>
      <img src={LoadingImage} width={70} alt="Not Found" />
      <div className="typewriter">
        <h1 className="text-white">Loading...</h1>
      </div>
    </div>
  );
}

export default Notfound;
