import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  width: 140px;
  height: 120px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

const Content = styled.div``;

const Count = styled.div`
  margin-top: 10px;
`;

const Profile = ({ imgUrl, name, content, length }) => {
  return (
    <Container>
      <Image imgUrl={imgUrl}></Image>
      <TextContainer>
        <Name>{name}</Name>
        <Content>{content}</Content>
        <Count>게시물 {length}개</Count>
      </TextContainer>
    </Container>
  );
};

export default Profile;
