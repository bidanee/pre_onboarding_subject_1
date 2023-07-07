# 프리온보딩 프론트엔드 과제

**1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**

- `/` → `root` 페이지
- `/about` → `about` 페이지

**2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

- 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)

**3) Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.**

```tsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

**4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.**

```tsx
const { push } = useRouter();
```

**5) 아래 스크린샷을 참고하여 앱을 작성한다.**

## 1. 프로젝트 초기 환경설정

### 1.1. vite 템플릿을 이용하여 react + ts 프로젝트 생성하기

```
yarn create vite react-vite-t1 --template react-ts
```

### 1.2. npx 명령어를 이용하여 eslint 적용하기

```
npx eslint --init
```

## 2. 소스 구조

```
src/
├── assets
├── common
│   └── Button.tsx
├── components      // 라우터 컴포넌트
│   ├── Route.tsx
│   └── Router.tsx
├── hooks
│   ├── usePath.tsx
│   └── useRouter.tsx
├── pages          // 페이지 관련 폴더
│   ├── about
│   └── root
├── App.tsx
├── index.css
├── main.tsx
```

## 3. 결과 페이지
