// import React, { useEffect, useState } from "react";
// import { Link } from "react-scroll";
import React from "react";

const SideBar = () => {
  const { name, email } = JSON.parse(localStorage.getItem("auth"))?.user?.data
    ?.profile;
  return (
    <div className="sidebar_wrapper">
      <div className="skjhvbs">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/21hg5e6Z4gL.jpg"
          alt=""
        />
        <small className="cusname">{name}</small>
        <small className="cusemail">{email}</small>
        <button>Profile</button>
      </div>
      <div className="shydvjh">
        <p>Dashboard</p>
        <p>overview</p>
        <p>orders</p>
        <p>Products</p>
      </div>
    </div>
  );
};

export default SideBar;
