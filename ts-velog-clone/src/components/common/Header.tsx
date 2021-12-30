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

    <StHeader>
      <Link to="/">LOGO</Link>
      <StNav>
        <StSearchWrapper>
          <StSearchIcon className="material-icons">search</StSearchIcon>
        </StSearchWrapper>
        <StLink to="/write">새 글 작성</StLink>
        <StUserWrapper>
          <StUserIMG src={userLogo} width="32px" alt="user" />
          <span className="material-icons">arrow_drop_down</span>
        </StUserWrapper>
      </StNav>
    </StHeader>
  );
};

const StHeader = styled.header`
  height: 64px;
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StNav = styled.nav`
  height: 40px;
  display: flex;
  align-items: center;
`;

const StSearchWrapper = styled.div`
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

const StSearchIcon = styled.span`
  margin-top: 8px;
`;

const StLink = styled(Link)`
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

const StUserWrapper = styled.div`
  margin-left: 1em;
`;

const StUserIMG = styled.img`
  border-radius: 50%;
`;

export default Header;
