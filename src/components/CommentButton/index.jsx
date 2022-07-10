// 댓글 작성

// 생성을 위한 스타일 컴포넌트 기능 가져오기
import styled from "styled-components";

// 댓글 컴포넌트 생성
const CommentButton = styled.button`
  width: 50px;
  background-color: transparent;
  border: none;
  color: #0095f6;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
`;


// 댓글 컴포넌트 밖으로 보내기 
export default CommentButton;
