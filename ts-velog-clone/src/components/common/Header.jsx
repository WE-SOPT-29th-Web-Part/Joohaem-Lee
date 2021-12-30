import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import userLogo from "../../assets/images/snupi.jpg";

const Header = () => {
  return (
    // <header>
    //   <StyledLeft>sopt.log</StyledLeft>
    //   <StyledRight>
    //     <Link to="/write">글 작성</Link>
    //   </StyledRight>
    // </header>

    <StyledHeader>
      <Link to="/">LOGO</Link>
      <Nav>
        <SearchWrapper>
          <SearchIcon className="material-icons">search</SearchIcon>
        </SearchWrapper>
        <StyledLink to="/write">새 글 작성</StyledLink>
        <UserWrapper>
          <UserIMG src={userLogo} width="32px" alt="user" />
          <span className="material-icons">arrow_drop_down</span>
        </UserWrapper>
      </Nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 64px;
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  height: 40px;
  display: flex;
  align-items: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  vertical-align: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 12px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: var(--main-gray-color);
    cursor: pointer;
    color: var(--main-white-color);
  }
`;

const SearchIcon = styled.span`
  margin-top: 8px;
`;

const StyledLink = styled(Link)`
  width: 6em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  text-decoration: none;
  border-radius: 50px;
  background-color: var(--main-blue-color);
  color: var(--main-white-color);
  font-size: 16px;
  font-weight: 700;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: var(--main-gray-color);
  }
`;

const UserWrapper = styled.div`
  margin-left: 1em;
`;

const UserIMG = styled.img`
  border-radius: 50%;
`;

export default Header;
