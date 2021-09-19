import React, { useEffect, useState } from "react";
// import Sidebar from "./SideBar";
import { FiLogOut } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

const CustomerDashboard = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    setInfo(
      localStorage.getItem("auth") !== undefined
        ? JSON.parse(localStorage.getItem("auth"))
        : ""
    );
  }, []);
  return (
    <div className="cusdashb">
      {/* <div className="oaksdy">
        <Sidebar />
      </div> */}
      <div>
        <div className="user_orderPage">
          <div className="yyydkcdc">
            <h2>profile</h2>
            <p>
              <span>Name:</span> {info?.user.data.profile.name}
            </p>
            <p>
              <span>Email:</span> {info?.user.data.profile.email}
            </p>
            <p>
              <span>Phone:</span> {info?.user.data.profile.phone}
            </p>
            <p>
              <span>Address:</span> {info?.user.data.profile.address}
            </p>
            <p>
              <span>Postcode</span> {info?.user.data.profile.postcode}
            </p>
          </div>
          <button>
            <FiLogOut className="FiLogOut" />
            Sign Out
          </button>
        </div>
        {/* dashboard */}
        <div className="dshpar">
          <h2>Overview</h2>
          <div className="jeityn">
            {/* visitors */}
            <div className="hskdgjh">
              <div className="poiluykhg">
                <p>580</p>
                <small>Visitors</small>
              </div>
              <HiUserGroup className="HiUserGroup" />
            </div>
            {/* customer rating */}
            <div className="ppoiuy">
              <div className="skjgwo">
                <div className="wschg">
                  <p>5.0</p>
                  {[1, 2, 3, 4, 5].map((_, i) => {
                    return <p key={i}>&#10029;</p>;
                  })}
                </div>
                <small>customer satisfaction</small>
              </div>
              <FaRegHandshake className="FaRegHandshake" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
