import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import DetailPost from "../components/DetailPost";

const EachPostWrapper = styled.div`
  width: 100%;
  min-width: 720px;
`;

const Page = ({ apiUrl }) => {
  const { pageId } = useParams();
  const [eachPost, setEachPost] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/album/${pageId}`).then((response) => {
      setEachPost(response.data);
    });
  }, []);

  return (
    <>
      <EachPostWrapper>
        <DetailPost
          title={eachPost.title}
          content={eachPost.content}
          img={eachPost.img}
        />
      </EachPostWrapper>
    </>
  );
};

export default Page;
