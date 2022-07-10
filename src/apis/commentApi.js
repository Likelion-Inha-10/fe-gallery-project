//reques.js가져오기 기능 사용 => request는 API주고 가져온것.
import request from "./request";



// 특정 게시글에 대한 전체 댓글 조회
export const getCommentsByImageId = async (imageId) => {
  const response = await request.get(`/album/find/${imageId}`);
  return response.data;
};


//댓글 삭제
export const deleteCommentById = async (imageId, id) => {
  return await request.delete(`/album/delete/comment/${id}`);
};


// 특정 게시글에 대한 전체 댓글 조회
export const createComment = async (imageId, content) => {
  return request.post(`/album/create/comment/${imageId}`, {
    content,
  });
};
