# React + TypeScript + Vite + TailwindCSS Github Page 배포하기
## for 까먹을때

### 목적: 간단한 정적 웹사이트 누구나 접근 가능하게 배포
정적 웹사이트 -> 브라우저가 혼자 다 해라
보안 싹 빼고 HTML/CSS/JS만 올리는거임
프론트엔드 프로토타입으로다가
안되는거 -> Node.js 서버, Express API, DB 직접연결, SSR, 세션기반 인증 등 내 컴퓨터가 일해야하는거
되는거 -> localStorage, 외부 API, Firebase 등 다른 컴퓨터가 실행중인 자원
`
추천 용도: 
- UI 프로젝트
- 포트폴리오
- 문서 사이트
- 블로그
- 외부 API fetch
- 클라이언트 상태관리
- Tailwind
- React 다 됨
- 프론트 연습용
`

[1~3] Github Pages 되긴 하는지 확인
where: github 페이지

### 1. 레포지토리 생성
깃허브에서 New 레포지토리, public, Add README on
기존 레포지토리 배포만 하고싶다 -> 5~8번

### 2. 레포지토리 Page Settings
Settings - Pages - Build and deployment
- Source: Deploy from a branch(기본값임)
- Branch: main, /(root) 바꾸고 save

### 3. Actions workflows 확인
잠시 대기 후 누르면 확인가능
새로고침 자동으로 안돼서 마냥 기다리진 마셈
들어가면 deploy에 URL 뜸(5번에서 사용)
웹에 README 내용 뜰거임

[4~6] 프로젝트 생성, 배포 세팅
where: VScode/터미널
### 4. 현재 폴더에 프로젝트 생성
`npm create vite@latest . -- --template react-ts`
`npm install`
템플릿 안써도 됨
CRA는 추억으로 남겨두자

### 5. gh-pages 설치
`npm install gh-pages --save-dev`
github Pages 배포 도와주는거임

### 6. package.json 수정
"script" 안에 "deploy": "gh-pages -d dist" 추가
"homepage": "https://깃허브아이디.github.io/레포이름", 추가

[7~8] 배포
### 7. 배포
where: VScode/터미널
`npm run deploy`
실행시 빌드+github pages 배포 순서대로 함
그럼 로컬 폴더에 dist 폴더 생김(레포지토리엔 안올라감)

### 8. 레포지토리 Page Settings 수정
where: github 페이지
아까 Settings - Pages - Build and deployment - Branch
main이었던걸 gh-pages로 바꾸고 save

### 9. tailWindCSS 설치
https://tailwindcss.com/docs/installation/using-vite?_gl=1%2A1hq31y4%2A_gcl_au%2ANTE3MDUzNjI2LjE3NzE2NjI3NTc.%2A_ga%2ANzA4Nzg1MDY4LjE3NzE2NjI3NTc.%2A_ga_85V6SRKGJV%2AczE3NzE2NjI3NTckbzEkZzEkdDE3NzE2NjI5NzAkajU5JGwwJGgw&referrer=inflearn
따라하고 푸쉬