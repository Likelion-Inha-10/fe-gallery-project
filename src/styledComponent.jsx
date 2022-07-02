import styled from "styled-components";
import { InfoContainer } from "./styledComponent";

export const ProfileWrapper = styled.div`
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  max-width: 700px;
  width: 100vw;
  height: 20vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-height: 150px;
  min-height: 100px;
`;

export const MessegeWrapper = styled.div`
  width: 100vw;
  max-width: 700px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MessegeContainer = styled.div`
  height: 100%;
  width: 90%;
`;

export const ProfilePhoto = styled.div`
  border-radius: 50%;
  height: 20vmin;
  width: 20vmin;
  min-height: 80px;
  min-width: 80px;
  max-height: 110px;
  max-width: 110px;
  background-image: url("https://post-phinf.pstatic.net/MjAxOTA1MzFfMTc5/MDAxNTU5Mjk1MzU4MTA4.KAmIJnV33DNrucAEUr-3_j1kyVlv0iYCPjRQHy7hMPAg.tH1bRizd4UIZphk3Zp2zJrkMv2LpmE3OMsOr1u8shtgg.JPEG/0.jpg?type=w1200");
  background-position: 50% 30%;
  background-size: 150px;
`;

export const StateWrapper = styled.div`
  height: 5rem;
  width: 50%;
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StateContainer = styled.div`
  width: 5rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PostsWrapper = styled.div`
  height: 1000px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
export const PostsContainer = styled.div`
  width: 100vw;
  max-width: 700px;
  grid-template-columns: 32% 32% 32%;
  grid-template-rows: repeat(3, 43vmin);
  display: grid;
  gap: 1vmin;
  justify-content: center;
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrapper = styled.div`
  padding-top: 0.2rem;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const PostPhoto = styled.div`
  width: 100%;
  height: 77%;
`;

export const ArticleSubWrapper = styled.div`
  height: auto;
  width: 100vw;
  max-width: 700px;
`;

export const TitleWrapper = styled.div`
  height: 40px;
  width: 100vw;
  max-width: 700px;
`;

export const PhotoWrapper = styled.div`
  width: 100vw;
  height: auto;
  max-height: 700px;
  max-width: 700px;
`;

export const PhotoContainer = styled.div`
  width: 100%;
  height: 0;
  overflow: hidden;
  position: relative;
  padding-bottom: 100%;
`;

export const ReplInputWrapper = styled.div`
  height: auto;
  width: 100vw;
  max-width: 700px;
  display: flex;
  justify-content: space-around;
`;

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100vw;
`;

export const ReplListWrapper = styled.div`
  height: auto;
  width: 100vw;
  max-width: 700px;
`;

export const ReplWrapper = styled.div`
  width: auto;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ReplContainer = styled.div`
  display: flex;
`;
/* 
2번째 할때 개선해야할 것
가로세로비율유지하는 방법을 공부해야할듯, 
그리고 구조짤때 저 상위계층에 700맥이는게 더 나을듯. 
계속 반복해서 쓰게됨 

owner페이지에서 사진의 가로세로 비율을 고정하는 법을 
배우지.
왜 저런 코드를 쓰는지랑 어떻게 구조인가 하위계층을 짜야하는지를
알아야헤. 

컴포넌트 분리 , 마진 패딩에 대한 고부
인풋 어떻게 꾸미는지 익명게시판 보기*/
