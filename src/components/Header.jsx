import React from "react";

const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <span className="navbar-brand mb-0 h1">{props.title}</span>
      </nav>
    </>
  );
};

export default Header;
