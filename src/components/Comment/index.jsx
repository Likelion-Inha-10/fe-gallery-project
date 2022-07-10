// 댓글 스타일 및 생성

// 생성을 위한 스타일 컴포넌트 기능 가져오기
import styled from "styled-components";

// 가장 바깥쪽 테두리
const Wrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

// 작성자 (익명)
const Author = styled.div`
  margin-right: 10px;
  font-weight: bold;
`;

// 내용
const Content = styled.div`
  margin-right: auto;
`;

//삭제 버튼 
const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 15px;
  color: #868e96;
  cursor: pointer;
`;


// 최종 출력 컴포넌트
const Comment = ({ author, body, onDelete }) => {
  return (
    <Wrapper>
      <Author> {author} </Author>
      <Content> {body} </Content>
      <DeleteButton onClick={onDelete}>삭제</DeleteButton>
    </Wrapper>
  );
};

//최종 출력 컴포넌트를 밖으로 출력
export default Comment;
