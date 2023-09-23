## 과제 내용

    ✅ 문서편집, revision 기능을 제공(CRUD 가능하게)하여 업무일지를 작성할 수 있는 직원들을 위한 위키사이트 구현(마크다운 형식)
    ✅ firebase database (Firestore) 이용
    ✅ 모달을 활용한 근무 시간을 표시하는 시계 및 타이머 창 구현
    ✅ 캐러셀을 활용한 회사 공지 페이지
    ✅ 갤러리 페이지 / 업무일지 페이지 등 메뉴를 필터링 또는 카테고리화 하는 선택바 구현
    ✅ netlify 등을 이용한 정적 페이지 배포
    ✅ TypeScript 사용 필수

## 배포

개발버전 : https://heartfelt-mandazi-9dce7c.netlify.app/  
깃 레포지토리 : https://github.com/noSPkeepgoing/Wikipage-team12

## 팀원소개

|    고솔미     |    박은영     |    배경규    |      정지오      |              최선파               |
| :-----------: | :-----------: | :----------: | :--------------: | :-------------------------------: |
|    @SOL-MI    |   @SKY-PEY    | @kyungkyuBae |   @jiohjung98    |          @noSPkeepgoing           |
| 스터디 페이지 | 갤러리 페이지 |  위키페이지  | 메인페이지, 헤더 | 로그인/회원가입페이지, 에러페이지 |

## 프로젝트 소개

- “Together + Study”의 의미로 줄여서 “투게더스”라는 웹 서비스를 만들었습니다.
- 공부를 위한 스터디 모집공간, 공부시간 공유 공간이 있습니다.
- 공동체 활동을 위한 게시판과 갤러리 공간이 있습니다.

## 프로젝트 구성

- 로그인 / 회원가입
  | 로그인 | 회원가입 |
  |:---:|:---:|
  |![로그인](https://github.com/KDT1-FE/Y_FE_Toy1/assets/125979833/67424504-c07f-4f2a-b2bf-fd29bc84ae12)|![회원가입](https://github.com/KDT1-FE/Y_FE_Toy1/assets/125979833/19b88982-9073-4b95-ae2c-c6989eb68f01)|
- 메인
  | 캐러셀 | 스터디 모집 |
  |:---:|:---:|
  |![메인캐러셀](https://github.com/KDT1-FE/Y_FE_Toy1/assets/125979833/3e49290c-0b3f-4642-aec1-473d6a52865e)|![메인포스트모달](https://github.com/KDT1-FE/Y_FE_Toy1/assets/125979833/59924009-ea82-4de4-b4aa-ed7c8bc8fabb)|
- 갤러리
  |네비바|이미지 업로드|상세정보모달|
  |:---:|:---:|:---:|
  |![갤러리 카테고리](https://github.com/KDT1-FE/Y_FE_Toy1/assets/125979833/44de4a4e-041c-4ead-8ef6-c0c880d65ad6)|![갤러리 업로드](https://github.com/KDT1-FE/Y_FE_Toy1/assets/125979833/cd2a9a75-59ae-4354-8c2e-8d324986429a)|![갤러리 댓글](https://github.com/KDT1-FE/Y_FE_Toy1/assets/125979833/324ce65d-d76f-44d8-b25b-5f6ddfaec671)|

- 위키
  |네비바|게시글 생성|
  |:---:|:---:|
  |![위키 네비바](https://github.com/KDT1-FE/Y_FE_Toy1/assets/125979833/c4416bea-34b9-4a77-a204-b5d59c0895b0)|![위키 글작성](https://github.com/KDT1-FE/Y_FE_Toy1/assets/125979833/a4ad7244-1a00-406b-893e-2ef933ac651a)|
  |게시글 수정|댓글 생성 및 수정|
  ![위키 글수정](https://github.com/KDT1-FE/Y_FE_Toy1/assets/125979833/274d3e58-ea3a-4725-9323-2f8643577eab)|![위키 댓글](https://github.com/KDT1-FE/Y_FE_Toy1/assets/125979833/12ee707b-9ef7-4953-8373-902ba3653dcf)|

- 스터디
  |랭킹|스터디 유저 정보|타이머|
  |:---:|:---:|:---:|
  |![스터디 랭킹](https://github.com/KDT1-FE/Y_FE_Toy1/assets/125979833/79d0639c-e24c-4dd1-a274-784e039eea5c)|![스터디 타이머 모달](https://github.com/KDT1-FE/Y_FE_Toy1/assets/125979833/5d082e4c-8663-4469-9b69-a1fed34eba5c)|![스터디 타이머](https://github.com/KDT1-FE/Y_FE_Toy1/assets/125979833/089af61c-c8b3-4b1f-bfe2-5566dba9ba12)

- 에러
  |에러페이지|
  |:---:|
  |![에러페이지](https://github.com/KDT1-FE/Y_FE_Toy1/assets/125979833/8a118b4c-09f0-44ba-bc28-037456ee0bf8)|

## 기술 스택

<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">  
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">  
<img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"> <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">

## 프로젝트 문서

노션 : https://www.notion.so/7a5c2df8aaf7413982f8895d96d4db07
