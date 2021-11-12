import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Outlet } from "react-router";

const HomeNav = () => {
  const { pathname } = useLocation();
  const [navIdx, setNavIdx] = useState(0);

  return (
    <>
      <NavWrapper>
        <Items>
          <Item selected={pathname === "/"} onClick={() => setNavIdx(0)}>
            <StyledLink to="">글</StyledLink>
          </Item>
          <Item selected={pathname === "/series"} onClick={() => setNavIdx(1)}>
            <StyledLink to="/series">시리즈</StyledLink>
          </Item>
        </Items>
        <NavUnderline position={navIdx} />
      </NavWrapper>
      <Outlet />
    </>
  );
};

const NavWrapper = styled.nav`
  position: relative;
  width: 16rem;
  margin: 0 auto;
`;

const NavUnderline = styled.div`
  position: absolute;
  bottom: 0;
  height: 3px;
  width: 8rem;
  background-color: var(--main-green-color);
  transition: transform 0.3s;
  transform: translateX(${({ position }) => position * 8}rem);
`;

// -------------- 위까지 HomeNav box ---------------

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
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
`;

export default HomeNav;
