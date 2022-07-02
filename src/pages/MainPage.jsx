import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  StyledText,
  MainHeaderWrapper,
  MainHeaderContainer,
  GalleryBorder,
  GalleryProfile,
  TextWrapper,
  MainBodyWrapper,
  MainBodyContainer,
} from "../components/StyledComponents.js";
import profileImg from "../images/like_lion_profile.png";
import GalleryCardDiv from "./../components/GalleryCardDiv";

const MainPage = ({ api_url }) => {
  const [articleInfo, setArticleInfo] = useState();
  const [articleCount, setArticleCount] = useState(0);
  useEffect(() => {
    axios
      .get(`${api_url}/album/articles`)
      .then((response) => {
        const storeArticleInfo = response.data.map((article) => (
          <GalleryCardDiv
            key={article.id}
            url={`/${article.id}`}
            img={article.img}
            title={article.title}
            text={article.content}
            like={article.article_like}
            comment={"1"}
          />
        ));
        setArticleInfo(storeArticleInfo);
        setArticleCount(response.data.length);
      })
      .catch((error) => {
        alert(error);
      });
  }, [api_url]);

  return (
    <>
      <MainHeaderWrapper>
        <MainHeaderContainer>
          <GalleryBorder>
            <GalleryProfile src={profileImg} />
          </GalleryBorder>
          <TextWrapper>
            <StyledText size="1.5" color="white" weight="600" padding="3">
              Lellow_Mellow
            </StyledText>
            <StyledText size="0.9" color="white" weight="300" padding="3">
              LikeLion 10th Front-End Last Mission
            </StyledText>
            <StyledText size="1" color="white" weight="300" padding="5">
              게시글 {articleCount}개 ✏️
            </StyledText>
          </TextWrapper>
        </MainHeaderContainer>
      </MainHeaderWrapper>
      <MainBodyWrapper>
        <MainBodyContainer>{articleInfo}</MainBodyContainer>
      </MainBodyWrapper>
    </>
  );
};

export default MainPage;
