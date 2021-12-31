import styled from "styled-components";
import userLogo from "../../assets/images/snupi.jpg";

import { ReactComponent as IcGithub } from "../../assets/icons/github.svg";
import { ReactComponent as IcHome } from "../../assets/icons/home.svg";
import { ReactComponent as IcMail } from "../../assets/icons/mail.svg";

const Profile = () => {
  return (
    <StSection>
      <StUserIMG src={userLogo} width="128px" alt="user" />
      <div>
        <StName>SNUPI</StName>
        <StLinkWrapper>
          <StUserLink href="https://github.com/joohaem" target="blank">
            <IcGithub />
          </StUserLink>
          <StUserLink
            href="https://xenodochial-wright-ed3962.netlify.app/#/"
            target="blank"
          >
            <IcHome />
          </StUserLink>
          <StUserLink href="/">
            <IcMail />
          </StUserLink>
        </StLinkWrapper>
      </div>
    </StSection>
  );
};

const StSection = styled.section`
  width: 80%;
  height: 10rem;
  margin: 2rem auto;

  display: flex;
  justify-content: start;
  align-items: center;

  border-bottom: 1px solid var(--main-lightgray-color);
`;

const StUserIMG = styled.img`
  border-radius: 50%;
`;

const StName = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 1.5rem;
`;

const StLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const StUserLink = styled.a`
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
