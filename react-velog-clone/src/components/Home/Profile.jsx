import React from "react";
import styled from "styled-components";
import userLogo from "../../assets/images/snupi.jpg";

const Profile = () => {
  return (
    <Section>
      <UserIMG src={userLogo} width="128px" alt="user" />
      <Name>SNUPI</Name>
    </Section>
  );
};

const Section = styled.section`
  width: 80%;
  height: 10rem;
  margin: 2rem auto;

  display: flex;
  justify-content: start;
  align-items: center;

  border-bottom: 1px solid var(--main-lightgray-color);
`;

const UserIMG = styled.img`
  border-radius: 50%;
`;

const Name = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 1.5rem;
`;

export default Profile;
