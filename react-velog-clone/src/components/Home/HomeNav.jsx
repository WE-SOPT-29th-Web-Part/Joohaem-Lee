import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Outlet } from "react-router";

const Items = styled.ul`
  display: flex;
  justify-content: center;
`;

const Item = styled.li`
  width: 8rem;
  height: 3rem;
  font-size: 1.125rem;
  color: var(--main-gray-color);

  font-weight: 700;
  color: ${({ selected }) =>
    selected ? "var(--main-green-color)" : "var(--main-gray-color)"};
  border-bottom: 3px solid
    ${({ selected }) => (selected ? "var(--main-green-color)" : "none")};
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeNav = () => {
  const { pathname } = useLocation();
  return (
    <>
      <nav>
        <Items>
          <Item selected={pathname === "/"}>
            <StyledLink to="">글</StyledLink>
          </Item>
          <Item selected={pathname === "/series"}>
            <StyledLink to="/series">시리즈</StyledLink>
          </Item>
        </Items>
      </nav>
      <Outlet />
    </>
  );
};

export default HomeNav;
