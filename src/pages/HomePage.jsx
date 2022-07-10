import { useState, useEffect } from "react";

import * as imageApi from "../apis/imageApi";

import Profile from "../components/Profile";
import Grid from "../components/Grid";
import GridImage from "../components/GridImage";


const HomePage = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    imageApi.getAllImages().then((images) => {
      setImages(images);
    });
  }, []);

  if (!images) return "로딩중";



  // 그림 클릭시 화면 출력창
  return (
    <div>
      <Profile postCount={images.length} />
      <Grid>
        {images.map((image) => (
          <GridImage
            key={image.id}
            imageId={image.id}
            imageUrl={image.img}
            title={image.title}
            description={image.content}
          />
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
