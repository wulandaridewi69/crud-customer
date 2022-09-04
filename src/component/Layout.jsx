import Footer from "./Footer";
import Header from "./Header";
import React from "react";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer/>
    </>
  )
}

export default Layout;
