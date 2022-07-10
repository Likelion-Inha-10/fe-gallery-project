import styled from "styled-components";

// 홈페이지 상단에 프로필 컴포넌트

// 프로필 사진 가져오기
import lionImage from "./images/lion.png";

// 테두리
const Wrapper = styled.div`
  padding: 40px 15px;
  display: flex;
`;

// 제목, 내용 등등 정렬 설정 컴포넌트
const VerticalCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// 이미지 컴포넌트
const Image = styled.img`
  margin-right: 15px;
  width: 120px;
  border-radius: 60px;
`;

// 프로필 이름 컴포넌트
const Name = styled.h1`
  margin-bottom: 4px;
  font-size: 24px;
  font-weight: bold;
`;

// 자기소개 컴포넌트
const Introduce = styled.p`
  margin-bottom: 12px;
  font-size: 16px;
  color: #495057;
`;

// 게시물 개수 컴포넌트
const PostCount = styled.p`
  font-size: 14px;
`;

const Profile = ({ postCount }) => {
  return (
    <Wrapper>
      <div>
        <Image src={lionImage} />
      </div>
      <VerticalCenter>
        <Name> 주시현_10th_frontend </Name>
        <Introduce>
          멋쟁이사자처럼 10기 여러분의 소중한 추억들을 보관합니다 😎
        </Introduce>
        <PostCount> 게시물 {postCount}개 </PostCount> 
      </VerticalCenter>
    </Wrapper>
  );
};

// 프로필 컴포넌트 밖으로 내보내기 => 이후에 홈피로 받음.
export default Profile;
