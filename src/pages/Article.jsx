import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  ArticleWrapper,
  ArticleSubWrapper,
  TitleWrapper,
  PhotoWrapper,
  PhotoContainer,
  ReplInputWrapper,
  ReplListWrapper,
  ReplWrapper,
  ReplContainer,
} from "../styledComponent";
import Text from "../components/Text";
import Div from "../components/Div";
import PhotoSubContainer from "../components/PhotoSubContainer";

const Article = ({ api }) => {
  const { articleId } = useParams();
  const [article, setArticle] = useState([]);
  const [repls, setRepls] = useState([]);
  const [repl, setRepl] = useState();
  useEffect(() => {
    axios.get(`${api}/album/${articleId}`).then((response) => {
      console.log(response.data);
      setArticle(response.data);
      setRepls(response.data.comments);
    });
  }, []);

  useEffect(() => {
    axios.get(`${api}/album/find/${articleId}`).then((response) => {
      console.log(response.data);
    });
  }, []);
  const onChange = (e) => {
    setRepl(e.target.value);
  };
  const SubmitRepl = () => {
    axios
      .post(`${api}/album/create/comment/${articleId}`, {
        ...repls,
        content: repl,
      })
      .then(() => {
        window.location.reload();
      });
  };

  const DeleteRepl = (e) => {
    console.log(repl);
    axios
      .delete(`${api}/album/delete/comment/${e.target.id}`, {
        comment_id: e.target.id,
      })
      .then(() => {
        window.location.reload();
      });
  };

  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      SubmitRepl();
    }
  };

  return (
    <>
      <ArticleWrapper>
        <ArticleSubWrapper>
          <TitleWrapper>
            <Div margin="5px" />
            <Text size="20px">{article.title}</Text>
            <Div />
            <Text>{article.content}</Text>
          </TitleWrapper>
          <PhotoWrapper>
            <PhotoContainer>
              <PhotoSubContainer url={article.img}></PhotoSubContainer>
            </PhotoContainer>
          </PhotoWrapper>
        </ArticleSubWrapper>
        <Div />
        <ReplInputWrapper>
          <input
            onChange={onChange}
            placeholder="댓글 작성..."
            value={repl}
            name="repl"
            onKeyUp={onKeyUp}
          ></input>
          <button onClick={SubmitRepl}>게시</button>
        </ReplInputWrapper>
        <ReplListWrapper>
          {repls.map((repl) => (
            <ReplWrapper>
              <ReplContainer>
                <Text weight="700">익명</Text>
                <Div margin="5px" />
                <Text max="85%" align="left">
                  {repl.content}
                </Text>
              </ReplContainer>
              <button id={repl.id} onClick={DeleteRepl}>
                삭제
              </button>
            </ReplWrapper>
          ))}
        </ReplListWrapper>
      </ArticleWrapper>
    </>
  );
};

export default Article;
