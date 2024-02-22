import React from "react";
import "./header.css";
import Logo from "../../assets/bluetick-consultants.png";
const Header = () => {
  return (
<header className="header">
  <img src={Logo} alt="Logo" />
</header>
  );
};

export default Header;
