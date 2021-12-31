import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router";
import styled from "styled-components";

const HomeNav = () => {
  const { pathname } = useLocation();
  const [navIdx, setNavIdx] = useState<number>(0);

  return (
    <>
      <StNavWrapper>
        <StItems>
          <StItem selected={pathname === "/"} onClick={() => setNavIdx(0)}>
            <StLink to="">글</StLink>
          </StItem>
          <StItem
            selected={pathname === "/series"}
            onClick={() => setNavIdx(1)}
          >
            <StLink to="/series">시리즈</StLink>
          </StItem>
        </StItems>
        <StNavUnderline position={navIdx} />
      </StNavWrapper>
      <Outlet />
    </>
  );
};

const StNavWrapper = styled.nav`
  position: relative;
  width: 16rem;
  margin: 0 auto;
`;

const StNavUnderline = styled.div<{ position: number }>`
  position: absolute;
  bottom: 0;
  height: 3px;
  width: 8rem;
  background-color: var(--main-green-color);
  transition: transform 0.3s;
  transform: translateX(${({ position }) => position * 8}rem);
`;

// -------------- 위까지 HomeNav box ---------------

const StItems = styled.ul`
  display: flex;
  justify-content: center;
`;

const StItem = styled.li<{ selected: boolean }>`
  width: 8rem;
  height: 3rem;
  font-size: 1.125rem;
  color: var(--main-gray-color);

  font-weight: 700;
  color: ${({ selected }) =>
    selected ? "var(--main-green-color)" : "var(--main-gray-color)"};
`;

const StLink = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
`;

export default HomeNav;
