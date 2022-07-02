import styled from "styled-components";

// 공용 components

export const StyledText = styled.div`
  font-size: ${(props) => props.size || 1}rem;
  color: ${(props) => props.color || "white"};
  font-weight: ${(props) => props.weight || 300};
  padding-top: ${(props) => props.padding || 0}px;
  padding-bottom: ${(props) => props.padding || 0}px;
  padding-left: ${(props) => props.paddingLeft || 0}px;
  padding-right: ${(props) => props.paddingRight || 0}px;
`;

export const StyledTextSimple = styled.div`
  font-size: ${(props) => props.size || 1}rem;
  color: ${(props) => props.color || "white"};
  font-weight: ${(props) => props.weight || 300};
  padding-top: ${(props) => props.padding || 0}px;
  padding-bottom: ${(props) => props.padding || 0}px;
  padding-left: ${(props) => props.paddingLeft || 0}px;
  padding-right: ${(props) => props.paddingRight || 0}px;
  overflow: hidden; // 을 사용해 영역을 감출 것
  text-overflow: ellipsis; // 로 ... 을 만들기
  white-space: nowrap; // 아래줄로 내려가는 것을 막기위
`;

// MainPage components

// - header
export const MainHeaderWrapper = styled.div`
  width: 100vw;
  max-width: 600px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainHeaderContainer = styled.div`
  margin: 4rem 1rem 1rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GalleryBorder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 50%;
  padding: 3px;
  margin: 10px 10px 10px 20px;
  background: linear-gradient(90deg, #ea8238 0%, #ea8238 35%, #ffc03d 100%);
`;

export const GalleryProfile = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  margin: 10px 20px 10px 10px;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

// - body

export const MainBodyWrapper = styled.div`
  width: 100vw;
  max-width: 600px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainBodyContainer = styled.div`
  margin: 2rem 1rem 1rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: left;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const GalleryCard = styled.div`
  box-sizing: border-box;
  padding: 0.5rem;
  width: 33.3333%;
  border-radius: 0.7rem;
  transition: 0.3s;
  &:hover {
    background-color: #282828;
    transition: 0.3s;
  }
  &:active {
    background-color: #282828;
    transition: 0.3s;
  }
`;

export const CardImage = styled.img`
  box-sizing: content-box;
  margin: 10px 0px 0px 0px;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

export const CardText = styled.div`
  box-sizing: content-box;
  margin: 0.3rem 0rem 0.3rem 0rem;
`;

export const CardInfoBox = styled.div`
  margin-left: 85%;
  width: 15%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardLike = styled.div`
  color: red;
  text-align: center;
  background: none;
  border: none;
  border-radius: 50%;
  transition: 0.3s;
  &:hover {
    color: #ea8238;
    transition: 0.3s;
  }
  &:active {
    color: #ea8238;
    transition: 0.3s;
  }
`;

// PostInfoPage components

// - Post

export const PostInfoWrapper = styled.div`
  width: 100vw;
  max-width: 600px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostInfoContainer = styled.div`
  box-sizing: border-box;
  margin-top: 2rem;
  padding: 2rem 1rem 1rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  transition: 0.3s;
  &:hover {
    background-color: #282828;
    transition: 0.3s;
  }
  &:active {
    background-color: #282828;
    transition: 0.3s;
  }
`;

export const PostImg = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

export const PostBody = styled.div`
  box-sizing: content-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PostText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const PostLikeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: right;
`;

export const PostLike = styled.button`
  margin-top: 20px;
  color: red;
  border: none;
  background: none;
  transition: 0.3s;
  &:hover {
    color: #ea8238;
    transition: 0.3s;
  }
  &:active {
    color: #ea8238;
    transition: 0.3s;
  }
`;

// - comment

export const PostCommentWrapper = styled.div`
  width: 100vw;
  max-width: 600px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostCommentContainer = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  transition: 0.3s;
`;

export const PostNewCommentBox = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #282828;
  border-radius: 2rem;
`;

export const PostNewCommentInput = styled.input`
  width: 88%;
  margin-left: 2%;
  font-size: 1rem;
  color: white;
  background: none;
  border: none;
`;

export const PostNewCommentButton = styled.button`
  padding-left: 3%;
  color: white;
  width: 10%;
  text-align: center;
  background: none;
  border: none;
  border-radius: 50%;
  transition: 0.3s;
  &:hover {
    color: #ea8238;
    transition: 0.3s;
  }
  &:active {
    color: #ea8238;
    transition: 0.3s;
  }
`;

export const PostCommentBox = styled.div`
  margin-top: 1rem;
  padding: 0.1rem 0rem 0.1rem 0rem;
  width: 100%;
  min-height: 3rem;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #4e4e4e;
  border-radius: 2rem;
  transition: 0.3s;
  &:hover {
    background-color: #747474;
    transition: 0.3s;
  }
`;

export const PostCommentIcon = styled.div`
  width: 1.6rem;
  padding: 0.5rem 0rem 0.5rem 0.7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PostCommentInfo = styled.div`
  width: 80%;
  padding: 0.5rem 0.5rem 0.5rem 0rem;
  display: flex;
  flex-direction: row;
  align-items: left;
  overflow: hidden;
  word-wrap: break-word;
  line-height: 1.3rem;
`;

export const PostCommentButtonWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PostCommentLike = styled.button`
  color: red;
  text-align: center;
  background: none;
  border: none;
  border-radius: 50%;
  transition: 0.3s;
  &:hover {
    color: #ea8238;
    transition: 0.3s;
  }
  &:active {
    color: #ea8238;
    transition: 0.3s;
  }
`;

export const PostCommentDelete = styled.button`
  padding-right: 0.8rem;
  color: white;
  text-align: center;
  background: none;
  border: none;
  border-radius: 50%;
  transition: 0.3s;
  &:hover {
    color: #ea8238;
    transition: 0.3s;
  }
  &:active {
    color: #ea8238;
    transition: 0.3s;
  }
`;
