import styled from "styled-components";

const Wrapper = styled.div``;


// 이미지 칸 
const Image = styled.div`
  height: 400px;
  // props기능을 통해서 이미지 받아서 출력하기
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;

// 텍스트 칸
const TextWrapper = styled.div`
  padding: 20px;
`;

// 제목 칸
const Title = styled.p`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
`;

// 설명 칸
const Description = styled.p`
  font-size: 18px;
  line-height: 1.3;
  color: #495057;
`;


// 이미지 선택시 출력화면 중 이미지 쪽
const DetailImage = ({ image, title, description }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title > {title} </Title>
        <Description> {description} </Description>
      </TextWrapper>
      <Image image={image} />
    </Wrapper>
  );
};

export default DetailImage;
// 이미지 칸 내보내기
