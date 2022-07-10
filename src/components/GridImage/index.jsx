import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  aspect-ratio: 1;
`;


// 홈페이지에서 출력되는 칸 하나 컴포넌트
// 이미지 컴포넌트
const Image = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
`;

// 텍스트 감싸는 컴포넌트
const TextWrapper = styled.div`
  text-align: center;
`;

// 텍스트 안에 가장 첫번째 단락인 제목 컴포넌트
const Title = styled.p`
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
`;

// 텍스트 안에 두번째 단락인 설명 컴포넌트
const Description = styled.p`
  margin-bottom: 10px;
  font-size: 13px;
  color: #adb5bd;
`;

// 위에서 만든걸 합치는 최총 GridImage => 나중에 홈페이지로 가져옴
const GridImage = ({ imageId, imageUrl, title, description }) => {
  return (
    // 링크 태그를 이용하여 누르면 그 페이지로 이동하기
    <Wrapper>
      <Link to={`/${imageId}`}> 
        <Image imageUrl={imageUrl} />
      </Link>
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
    </Wrapper>
  );
};

export default GridImage;