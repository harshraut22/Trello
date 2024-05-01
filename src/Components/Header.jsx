import React from "react";
import "../Styles/HeaderStyles.css";

const Header = () => {
  return (
    <header className="headr-cntr">
      <button className="header-btn"><img src="../assets/bell.svg" alt="" className="header-bell"/></button>
      <button className="header-btn"><img src="../assets/info.svg" alt="" className="header-info"/></button>
      <button className="header-btn"><img src="../assets/plus.svg" alt="" className="header-plus"/></button>
      <button className="header-btn"><img src="../assets/profile.svg" alt="" className="header-profile"/></button>
    </header>
  );
};

export default Header;
