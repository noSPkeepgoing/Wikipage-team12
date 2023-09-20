import { db } from './firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { userId, userNickname, userImage } from 'pages/Gallery';

//리스트 통째로 바꾸기
const uploadCommentWholeList = (data, imgId, categoryId) => {
  const commentRef = doc(db, categoryId, imgId);
  updateDoc(commentRef, {
    comments: data,
  });
};

// 댓글 업로드
//댓글별 객체, 유저 넣기
const uploadCommentList = (imgId, categoryId, comment) => {
  const commentRef = doc(db, categoryId, imgId);
  updateDoc(commentRef, {
    comments: arrayUnion({
      commentUid: userId,
      commentUser: userNickname,
      text: comment,
      userImage: userImage,
      commentsTime: new Date(),
    }),
  });
};

// like 업데이트
const updateLike = (imgId, categoryId, like) => {
  const likeRef = doc(db, categoryId, imgId);
  updateDoc(likeRef, {
    like: like,
  });
};
export { uploadCommentWholeList, uploadCommentList, updateLike };
