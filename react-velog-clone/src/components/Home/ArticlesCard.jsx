import React from "react";
import styled from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 2rem 0;
  border-bottom: 2px solid var(--main-lightgray-color);
  text-align: right;
  & > * {
    margin: 0.75rem 0;
  }
`;

const Img = styled.img`
  width: 40%;
  margin: auto auto 0.75rem;
  border-radius: 0.25rem;
`;

const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
`;

const H4 = styled.h4`
  font-weight: 400;
  /* 넘어가는 텍스트 숨기기 */
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  word-break: break-all;
`;

const TagsWrapper = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  padding: 0 0.75rem;
  border-radius: 1rem;
  background: rgb(241, 243, 245);
  font-size: 0.75rem;
  color: rgb(12, 166, 120);
  margin-left: 0.5rem;
`;

const Date = styled.p`
  color: var(--main-gray-color);
  font-size: 0.75rem;
`;

const ArticlesCard = ({ article }) => {
  const { title, summary, tags, thumbnail, date } = article;
  return (
    <Article>
      <Img src={thumbnail} alt="이미지" />
      <H3>{title}</H3>
      <H4>{summary}</H4>
      <TagsWrapper>
        {tags.map((tag) => (
          <Tag key={`tag-${tag}`}>{tag}</Tag>
        ))}
      </TagsWrapper>
      <Date>{date}</Date>
      {/* <section class="section main__slide-content">
  <article class="section__box">
    <img class="section__img" src="./assets/images/soptIMG.jpg" width="100%" alt="article img">
    <div class="section__main-box">
      <a class="section__text-link">
        <h4 class="section__title">[SOPT] 두 번째 주</h4>
        <p class="section__content">
          SOPT 2차 세미나
          <br>- JS 
          <br>-- 원시타입 / 참조타입
          <br>-- Object, Symbol 경우에) b = a 
          <br>(by reference : 같은 Object를 참조하여 같은 값을 변경하게 됨
          <br>-> const로 선언해도 바뀌게 됨)
          <br>-> 얕은 복사? 깊은 복사? 
        </p>
      </a>
      <p class="section__info">2021년 10월 1일 · 0개의 댓글</p>
    </div>
    <div class="section__footer-box">
      <a class="section__user">
        <img class="section__user-img" src="./assets/images/userIMG.jpg" width="24px" alt="user image">
        <span class="section__user-name">by<b>snupi</b></span>
      </a>
      <div class="section__like">
        <div class="section__like-img"></div>
        <span class="section__like-cnt">2497</span>
      </div>
    </div>
  </article>
</section> */}
    </Article>
  );
};

export default ArticlesCard;
