import React from "react";

import styled from "styled-components";

const StyledProfileWrapper = styled.div`
  min-width: 720px;
  height: 200px;
  display: flex;
  padding: 40px 15px;
`;

const StyledImageWrapper = styled.div`
  margin-right: 15px;
  width: 120px;
  border-radius: 60px;
  background-image: url(http://kr.people.com.cn/NMediaFile/2016/0907/FOREIGN201609070905000291701418142.jpg);
  background-size: 100% 100%;
`;

const StyledDetailWrapper = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const UserIntrodue = styled.p`
  font-size: 16px;
  font-weight: lighter;
  margin-bottom: 5px;
`;

const PostCount = styled.p`
  font-size: 14px;
  font-weight: lighter;
`;

const Profile = ({ postCount }) => {
  return (
    <StyledProfileWrapper>
      <StyledImageWrapper />
      <StyledDetailWrapper>
        <UserName>likelion_10th_frontend</UserName>
        <UserIntrodue>
          멋쟁이사자처럼 10기 여러분의 소중한 추억들을 보관합니다😎
        </UserIntrodue>
        <PostCount>게시물 {postCount}개</PostCount>
      </StyledDetailWrapper>
    </StyledProfileWrapper>
  );
};

export default Profile;
