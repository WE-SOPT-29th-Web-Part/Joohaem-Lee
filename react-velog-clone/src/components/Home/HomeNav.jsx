import React from "react";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <nav>
      <Link to="">글</Link>
      <Link to="/series">시리즈</Link>
    </nav>
  );
};

export default HomeNav;
