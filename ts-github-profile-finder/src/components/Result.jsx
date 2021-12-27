import React from "react";
import styled from "styled-components";

const Result = ({ userInfo, setUserInfo }) => {
  return (
    <Card>
      <button onClick={() => setUserInfo({})}>닫기</button>
      <img src={userInfo.avatar_url} alt="user" />
      <h3>{userInfo.name}</h3>
      <h4>{userInfo.login}</h4>
      <p>{userInfo.bio}</p>
      <a href={userInfo.html_url} target="_blank" rel="noopener noreferrer">
        Visit Github
      </a>
      <Ul>
        <li>
          <strong>Followers</strong>
          {userInfo.followers}
        </li>
        <li>
          <strong>Following</strong>
          {userInfo.following}
        </li>
        <li>
          <strong>Repos</strong>
          {userInfo.public_repos}
        </li>
      </Ul>
    </Card>
  );
};

export default Result;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 1rem;
  background-color: rgb(44, 48, 53);
  width: 25rem;
  border-radius: 20px;
  position: relative;
  animation: slideDown 400ms ease-in 0s 1 normal forwards;
  @keyframes slideDown {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  & > button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 50px;
    height: 30px;
    background-color: rgb(36, 39, 43);
    color: white;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  & > img {
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
    margin-top: 2rem;
  }
  & > h3 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    font-weight: bold;
  }
  & > h4 {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  & > p {
    padding: 1.25rem 3rem;
    text-align: center;
  }
  & > a {
    text-decoration: none;
    color: gold;
    border: 1px solid gold;
    padding: 8px;
    border-radius: 4px;
    &:hover {
      background-color: gold;
      color: rgb(44, 48, 53);
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
  & > li {
    width: 10rem;
    height: 3.5rem;
    background-color: rgb(36, 39, 43);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.5;
    border-right: 5px solid rgb(44, 48, 53);
    border-left: 5px solid rgb(44, 48, 53);
    & > strong {
      font-weight: bold;
    }
    &:nth-child(1) {
      border-left: none;
      border-bottom-left-radius: 20px;
    }
    &:nth-child(3) {
      border-right: none;
      border-bottom-right-radius: 20px;
    }
  }
`;
