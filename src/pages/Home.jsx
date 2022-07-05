import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Profile from "../components/Profile";
import PostList from "../components/PostList";
import axios from "axios";

const ContentWrapper = styled.div`
  min-width: 720px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const Home = ({ apiUrl }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/album/articles`).then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <>
      <Profile postCount={post.length} />

      {post.length === 0 && <p>로딩중.</p>}

      <ContentWrapper>
        {post.map((article) => (
          <NavLink to={`/${article.id}`}>
            <PostList
              key={article.id}
              img={article.img}
              title={article.title}
              content={article.content}
            />
          </NavLink>
        ))}
      </ContentWrapper>
    </>
  );
};

export default Home;
