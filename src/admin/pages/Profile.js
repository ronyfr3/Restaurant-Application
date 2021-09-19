import React, { useEffect, useState } from "react";
import get from "lodash/get";
// import { useSelector } from "react-redux";

const Profile = () => {
  const [info, setInfo] = useState();
  // const state = useSelector((state) => state.authState);
  useEffect(() => {
    setInfo(
      localStorage.getItem("auth") !== undefined
        ? JSON.parse(localStorage.getItem("auth"))
        : ""
    );
  }, []);
  return (
    <div className="user_profile">
      <h2>Profile Information</h2>
      <div className="profile_data">
        <p>
          <span>Name:</span> {get(info, "user.data.profile.name", "")}
        </p>
        <p>
          <span>Email:</span> {get(info, "user.data.profile.email", "")}
        </p>
        <p>
          <span>Contact Number:</span>{" "}
          {get(info, "user.data.profile.phone", "")}
        </p>
        <p>
          <span>Address:</span> {get(info, "user.data.profile.address", "")}
        </p>
      </div>
    </div>
  );
};

export default Profile;
