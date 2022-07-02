import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ProfileWrapper,
  ProfileContainer,
  ProfilePhoto,
  MessegeWrapper,
  StateWrapper,
  MessegeContainer,
  StateContainer,
  PostsWrapper,
  PostsContainer,
  PostWrapper,
  TextWrapper,
} from "../styledComponent";
import Text from "../components/Text";
import Div from "../components/Div";
import Photo from "../components/Photo";
import { Navigate, useNavigate } from "react-router-dom";

const Owner = ({ api }) => {
  const [posts, setPosts] = useState([]); //8개의 게시글을 담을 공간
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${api}/album/articles`).then((response) => {
      console.log(response); //확인을 위한 .. 나중에 지워야해
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <ProfileWrapper>
        <ProfileContainer>
          <ProfilePhoto></ProfilePhoto>
          <StateWrapper>
            <StateContainer>
              <Text weight="700" color="black" size="0.8rem">
                {posts.length}
              </Text>
              <Div margin="1px" />

              <Text color="black" size="0.8rem">
                게시물
              </Text>
            </StateContainer>

            <StateContainer>
              <Text weight="700" color="black" size="0.8rem">
                0
              </Text>
              <Div margin="1px" />
              <Text color="black" size="0.8rem">
                팔로워
              </Text>
            </StateContainer>
            <StateContainer>
              <Text weight="700" color="black" size="0.8rem">
                0
              </Text>
              <Div margin="1px" />

              <Text color="black" size="0.8rem">
                팔로잉
              </Text>
            </StateContainer>
          </StateWrapper>
        </ProfileContainer>
        <MessegeWrapper>
          <MessegeContainer>
            <Text align="left" weight="700">
              likelion_10th_frontend
            </Text>
            <Div />
            <Text align="left" color="darkgrey" size="0.8rem">
              멋쟁이사자처럼 10기 여러분의 소중한 추억들을 보관합니다
            </Text>
            <Div margin="10px" />
          </MessegeContainer>
        </MessegeWrapper>
      </ProfileWrapper>
      <PostsWrapper>
        <PostsContainer>
          {posts.map((post) => (
            <PostWrapper
              onClick={() => {
                navigate(`/album/${post.id}`);
              }}
              key={post.id}
            >
              <Photo url={post.img} />

              <TextWrapper>
                <Text color="black" size="0.7rem" weight="700">
                  {post.title}
                </Text>
                <Div margin="1px" />
                <Text color="grey" size="0.6rem">
                  {post.content}
                </Text>
              </TextWrapper>
            </PostWrapper>
          ))}
        </PostsContainer>
      </PostsWrapper>
    </>
  );
};

export default Owner;
