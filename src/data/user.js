import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { app } from './firebase';
import { adjective, emoji, noun } from './nickname';

const auth = getAuth(app);

// 이메일로 회원가입
export const createUser = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

// 유저 프로필 사진
const storage = getStorage();
export const uploadUserImage = async (fileName, file) => {
  const userImagesRef = ref(storage, `User/${fileName}`);
  await uploadBytes(userImagesRef, file);
  const imageUrl = await getDownloadURL(userImagesRef);
  return imageUrl;
};

// 유저 닉네임 형성
export const createNickname = async () => {
  const ad = adjective[randomItemInArray(adjective)];
  const n = noun[randomItemInArray(noun)];
  const e = emoji[randomItemInArray(emoji)];

  return `${ad} ${n} ${e}`;
};

const randomItemInArray = (array) => {
  return Math.floor(Math.random() * array.length);
};
