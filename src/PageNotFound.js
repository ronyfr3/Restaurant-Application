import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <p>
        Page Not Found! <span style={{ fontSize: 25 }}>&#128064;</span>
      </p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default PageNotFound;
