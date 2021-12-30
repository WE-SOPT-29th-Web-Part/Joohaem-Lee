import React from "react";
import styled from "styled-components";
import userLogo from "../../assets/images/snupi.jpg";
import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg";

const Profile = () => {
  return (
    <Section>
      <UserIMG src={userLogo} width="128px" alt="user" />
      <div>
        <Name>SNUPI</Name>
        <LinkWrapper>
          <UserLink href="https://github.com/joohaem" target="blank">
            <GithubIcon />
          </UserLink>
          <UserLink
            href="https://xenodochial-wright-ed3962.netlify.app/#/"
            target="blank"
          >
            <HomeIcon />
          </UserLink>
          <UserLink href="/">
            <MailIcon />
          </UserLink>
        </LinkWrapper>
      </div>
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
  margin: 0 1.5rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const UserLink = styled.a`
  svg {
    margin: 0.125rem;
    width: 1.25rem;
    height: 1.25rem;
    fill: var(--main-gray-color);
  }
  &:hover svg {
    fill: var(--main-black-color);
  }
`;

export default Profile;
