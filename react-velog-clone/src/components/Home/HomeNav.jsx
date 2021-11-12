import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Outlet } from "react-router";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 8rem;
    height: 3rem;
    font-size: 1.125rem;
    color: var(--main-gray-color);
    text-decoration: none;
  }
`;
const StyledLLink = styled(Link)``;
const StyledRLink = styled(Link)``;

const HomeNav = () => {
  return (
    <>
      <Nav>
        <StyledLLink to="">글</StyledLLink>
        <StyledRLink to="/series">시리즈</StyledRLink>
      </Nav>
      <Outlet />
    </>
  );
};

export default HomeNav;
