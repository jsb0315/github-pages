# React + TypeScript + Vite + TailwindCSS — Github Pages 배포하기
> *for 까먹을때*

---

## 🎯 목적

> 간단한 정적 웹사이트 누구나 접근 가능하게 배포

---

## 📌 정적 웹사이트란?

**브라우저가 혼자 다 해라** — 보안 싹 빼고 HTML/CSS/JS만 올리는거임

| ❌ 안 되는 것 | ✅ 되는 것 |
|---|---|
| Node.js 서버 | localStorage |
| Express API | 외부 API (Firebase 등) |
| DB 직접 연결 | 다른 컴퓨터가 실행 중인 자원 |
| SSR | — |
| 세션 기반 인증 | — |

*내 컴퓨터가 일해야 하는 것들은 안 됨*

### 💡 추천 용도

- UI 프로젝트 / 포트폴리오 / 문서 사이트 / 블로그
- 외부 API fetch / 클라이언트 상태관리
- Tailwind / React — 다 됨
- **프론트 연습용 최적**

---

## 🔵 [1~3] Github Pages 되긴 하는지 확인
`where: github 페이지`

### 1. 레포지토리 생성

깃허브에서 **New 레포지토리** 생성
- `public` 체크
- `Add README` on

> 기존 레포지토리 배포만 하고 싶다면 → **5~8번**으로 바로 이동

---

### 2. 레포지토리 Page Settings

**Settings → Pages → Build and deployment**

- **Source:** `Deploy from a branch` *(기본값)*
- **Branch:** `main`, `/(root)` → 바꾸고 **Save**

---

### 3. Actions workflows 확인

잠시 대기 후 확인 가능 (새로고침 자동 안 됨, 마냥 기다리지 마셈)

들어가면 deploy에 **URL** 뜸 → *5번에서 사용*

웹에 README 내용 뜰 것임

---

## 🟢 [4~6] 프로젝트 생성, 배포 세팅
`where: VSCode / 터미널`

### 4. 현재 폴더에 프로젝트 생성

```bash
npm create vite@latest . -- --template react-ts
npm install
```

> 템플릿 안 써도 됨. CRA는 추억으로 남겨두자 🪦

---

### 5. gh-pages 설치

```bash
npm install gh-pages --save-dev
```

> Github Pages 배포 도와주는 패키지

---

### 6. package.json 수정

`"scripts"` 안에 추가:

```json
"deploy": "gh-pages -d dist"
```

최상단에 추가:

```json
"homepage": "https://깃허브아이디.github.io/레포이름",
```

---

## 🟠 [7~8] 배포

### 7. 배포
`where: VSCode / 터미널`

```bash
npm run deploy
```

빌드 → Github Pages 배포 순서대로 실행됨

로컬에 `dist` 폴더 생성됨 *(레포지토리엔 안 올라감)*

---

### 8. 레포지토리 Page Settings 수정
`where: github 페이지`

**Settings → Pages → Build and deployment → Branch**

`main` → **`gh-pages`** 로 바꾸고 **Save**

---

## 🟣 [9] TailwindCSS 설치

[공식 문서 (Vite 기준)](https://tailwindcss.com/docs/installation/using-vite) 따라하고 **푸시**
