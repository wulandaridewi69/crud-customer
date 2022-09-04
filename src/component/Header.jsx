import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import React from 'react';

const Header = () => {

  return (
    <>
      <div className="sm:text-left bg-amber-300  bottom-0">
        <div className=" container text-black text-white text-center py-2">
          <a href="/">
            <img src={Logo} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;