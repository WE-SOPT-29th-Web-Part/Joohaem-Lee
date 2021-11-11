import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLeft = styled.div``;

const StyledRight = styled.div``;

const Header = () => {
  return (
    <div>
      <StyledLeft>sopt.log</StyledLeft>
      <StyledRight>
        <Link to="/write">글 작성</Link>
      </StyledRight>
    </div>
  );
};

export default Header;
