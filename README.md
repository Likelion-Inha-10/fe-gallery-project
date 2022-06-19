# 프론트엔드 갤러리 앱 프로젝트

## 필수 수강 강의

- Codelion '프론트엔드 트랙 - React'
  - 챕터4. 리액트 라우터 활용하기& 폼제출 & memo
  - 챕터6. REST api 연동 axios

> ⚠ 위 강의를 수강하지 않을 경우 과제 진행이 어렵습니다.

## 목표

- 실제 동작하는 간단한 멀티페이지 웹 어플리케이션을 개발할 수 있다.
- REST API 가 무엇인지 이해하며, 활용할 수 있다.

### 사용하는 주요 라이브러리

- React Router ([react-router-dom@6](https://reactrouter.com/docs/en/v6/getting-started/installation))
- Styled Components ([styled-components](https://styled-components.com/docs/basics#installation))
- Axios ([axios](https://axios-http.com/kr/docs/intro))

## 무엇을 만드나요?

### 🔍 완성본 미리보기

> 접속해서 직접 기능을 사용해볼 수 있습니다.

http://likelion-10th-inha-gallery.surge.sh

### ⚙️ 기능

지금까지 배운 모든 개념을 활용하여 인스타그램st의 간단한 갤러리 앱을 만듭니다.

1. REST API를 사용하여 여러가지 이미지를 불러와 사용자에게 표시합니다.
2. 이미지를 클릭하면, REST API를 사용하여 해당 이미지에 달린 댓글 목록을 불러와 사용자에게 표시합니다.
3. REST API를 사용하여 댓글을 새로 작성할 수 있습니다.
4. REST API를 사용하여 댓글을 삭제할 수 있습니다.

### 📒 필수 구현 사항

![](./readme-image.png)

1. 전체 이미지의 개수를 출력합니다.
2. 여러 이미지들을 Grid 형태로 이미지, 제목, 설명을 함께 표시합니다.
3. 여러 이미지 중 하나를 클릭하면 상세한 이미지 정보와 댓글 목록을 확인할 수 있는 페이지 (2번째 사진)로 이동합니다.
4. 댓글을 작성할 수 있습니다.
5. 댓글 목록을 표시합니다.
6. 삭제 버튼을 클릭하면 해당 댓글을 삭제하고, 댓글 목록을 다시 불러옵니다.

기타 디자인과 레이아웃은 원본과 요구사항과 크게 다르지 않은 범위에서 원하는대로 만드셔도 좋습니다.

### 📘 추가 구현 사항

> 아래 내용은 필수 구현 사항을 모두 구현한 다음 선택적으로 구현해주세요.

이미지 조회, 댓글 추가/삭제를 넘어 이미지를 추가하고 삭제하는 기능을 개발합니다. 아래 내용은 자유롭게 기획, 디자인 하여 구현해주세요 🤗. **단, 별도의 새 페이지를 만들어서 진행합니다.**

1. 이미지 URL, 이미지 제목, 이미지 설명을 입력받고 새로운 이미지를 등록하는 기능
2. 특정한 이미지를 삭제하는 기능

## API

요청을 호스트 정보와 문서는 아래와 같습니다.

- **HOST**: https://gallery.devhudi.xyz
- **DOCS** : https://gallery.devhudi.xyz/swagger-ui/index.html

## 참고자료

- [React Router v6 공식문서 (영어)](https://reactrouter.com/docs/en/v6/getting-started/tutorial)
- [Velopert님의 RR v6 튜토리얼 (한국어)](https://velog.io/@velopert/react-router-v6-tutorial)
- [REST API가 무엇인가요? (한국어)](https://hudi.blog/rest-api/)
- [Axios 공식문서 (한국어)](https://axios-http.com/kr/docs/intro)
- [Axios 러닝 가이드 (한국어)](https://yamoo9.github.io/axios/guide/usage.html#get-%EC%9A%94%EC%B2%AD)

## 완성본 코드

- https://github.com/Likelion-Inha-10/fe-gallery-project-example

> 예제 코드는 과제 중 자유롭게 참고 가능하지만, 최대한 본인의 힘으로 해결하려 노력합시다 😇
