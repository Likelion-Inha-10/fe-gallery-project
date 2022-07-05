import React, { useEffect, useState } from "react";
import Title from "../component/Title";
import ImageCard from "../component/ImageCard";
import { Background } from "../component/Styled";
import axios from "axios";

const MainPage = ({ apiUrl }) => {
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}album/articles`).then((response) => {
      setImageArray(response.data);
    });
  }, [apiUrl]);

  return (
    <>
      <Title
        image="title.jpeg"
        title="likelion_10th_frontend"
        titleExplain="멋쟁이사자처럼 10기 여러분의 소중한 추억들을 보관합니다 😎"
        number={imageArray.length}
      />

      <Background>
        {imageArray.map((element) => (
          <ImageCard
            key={element.id}
            imageId={element.id}
            image={element.img}
            ImageTitle={element.title}
            ImageExplain={element.content}
            likeNumber={element.article_like}
          />
        ))}
      </Background>
    </>
  );
};

export default MainPage;
