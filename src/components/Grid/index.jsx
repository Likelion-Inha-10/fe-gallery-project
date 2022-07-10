import styled from "styled-components";

// 이미지 분할 기능
const ImageGrid = styled.div`
  display: grid; // grid 기능
  // 전체화면의 3분의 1씩 분할
  grid-template-columns: repeat(3, 1fr); 
  grid-gap: 5px; // 갭을 5px씩
`;

// 이미지 분할 기능 내보내기
export default ImageGrid;
