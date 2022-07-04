import React, { useEffect, useState } from "react";
import Title from "../component/Title";
import ImageCard from "../component/ImageCard";
import Background from "../component/Background";
import axios from "axios";

const MainPage = ({ apiUrl }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}album/articles`).then((response) => {
      setImages(response.data);
    });
  }, []);

  return (
    <>
      <Title
        image="title.jpeg"
        title="likelion_10th_frontend"
        titleExplain="멋쟁이사자처럼 10기 여러분의 소중한 추억들을 보관합니다 😎"
        number={images.length}
      />

      <Background>
        {images.map((image) => (
          <ImageCard
            key={image.id}
            imageId={image.id}
            image={image.img}
            ImageTitle={image.title}
            ImageExplain={image.content}
          />
        ))}
      </Background>
    </>
  );
};

export default MainPage;
