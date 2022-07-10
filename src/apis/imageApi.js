//reques.js가져오기 기능 사용 => request는 API주고 가져온것.
import request from "./request";


//모든 게시물 조회
export const getAllImages = async () => {
  const response = await request.get("/album/articles");
  return response.data;
};

// ID에 의한 게시물 조회
export const getImageById = async (id) => {
  const response = await request.get(`/album/${id}`);
  return response.data;
};
