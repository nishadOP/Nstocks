import React, { useState } from "react";
import useUser from "./useUser";

import { Link } from "react-router-dom";



function Menu() {

  const [selectedmenu, setselectedmenu] = useState(0);
const [isprofiledropdown, setisprofiledropdown] = useState(false);
const user = useUser();

const handlelogout = async () => {
  await fetch("https://nstocks.onrender.com/logout", {
    method: "POST",
    credentials: "include",
  });
  window.location.href = "http://localhost:3000/login";
};

//handleclick for selectedmenu

const handlemenuclick = (index) => {
  setselectedmenu(index);
};

//handleclick for isprofiledropdown

const handleprofiledropdown = () => {
  setisprofiledropdown(!isprofiledropdown);
};

const menuclass = "menu";
const activemenuclass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" alt="Zerodha" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handlemenuclick(1)}
            >
              <p className={selectedmenu === 1 ? activemenuclass:menuclass }>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={()=>handlemenuclick(2)}
            >
              <p className={selectedmenu === 2? activemenuclass : menuclass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={()=>handlemenuclick(3)}
            >
              <p className={selectedmenu === 3 ? activemenuclass : menuclass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={()=>handlemenuclick(4)}
            >
              <p className={selectedmenu === 4 ? activemenuclass : menuclass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={()=>handlemenuclick(5)}
            >
              <p className={selectedmenu === 5 ? activemenuclass : menuclass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={()=>handlemenuclick(6)}
            >
              <p className={selectedmenu === 6 ? activemenuclass : menuclass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div style={{ position: "relative" }}>
  <div className="profile" onClick={handleprofiledropdown}>
    <div className="avatar">
      {user ? user.username.slice(0, 2).toUpperCase() : "ZU"}
    </div>
    <p className="username">{user ? user.username : "USERID"}</p>
  </div>

  {isprofiledropdown && (
    <div
      style={{
        position: "absolute",
        top: "100%",
        right: 0,
        background: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
        padding: "8px 16px",
        zIndex: 10,
      }}
    >
      <p
        onClick={handlelogout}
        style={{ cursor: "pointer", margin: 0, color: "#df514c" }}
      >
        Logout
      </p>
    </div>
  )}
</div>
        
      </div>
    </div>
  );
}
export default Menu;
