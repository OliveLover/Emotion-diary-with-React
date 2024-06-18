<h1> [감정 일기장] 만들기</h1>

<h3>Learning Point</h3>

<ul>
  <li>외부 폰트 설정(Google font)</li>
  <li>이미지 처리</li>
  <li>페이지 라우팅</li>
  <li>서버 / 클라이언트 사이드 렌더링</li>
  <li>리액트 라우터</li>
  <li>동적 경로</li>
  <li>공통 컴포넌트</li>
  <li>데이터 로딩</li>
  <li>데이터 정렬과 필터링</li>
  <li>커스텀 훅</li>
  <li>앱 최적화</li>
  <li>웹 스토리지</li>
  <li>로컬/세션 스토리지</li>
  <li>데이터 저장, 수정, 삭제</li>
</ul>

<h2>1. Context</h2>

<p>Context를 사용하는 까닭은 'Props Drilling' 문제를 해결하기 위해서 입니다. Props Drilling 문제는 리액트 컴포넌트 계층 구조에서 컴포넌트 간에 값을 전달할 때 발생합니다. Props는 컴포넌트 트리에서 언제나 부모에서 자식으로 단방향으로 전달됩니다. 리액트에서는 트리에서 2단계 이상 떨어져 있는 컴포넌트에 직접 데이터를 전달하는 것이 불가능합니다. Props는 원하는 목적지까지 데이터를 전달하기 위해서는 경로상에 있는 모든 컴포넌트에 일일이 Props를 전달해야 하는데, 이과정이 드릴로 땅을 파고 내려가는 것 같다고 하여 'Props Drilling'문제 라고 합니다. 이는 컴포넌트 사이의 데이터 구조를 파악하기 어렵고 수정하게 되면 그것을 공유하는 컴포넌트를 모두 살펴봐야하므로 유지 보수를 어렵게 합니다.</p>

![Context](https://github.com/OliveLover/Emotion-diary-with-React/assets/118647313/f9d783a1-aeb4-4ee0-8784-5b288f11cf2d)
*이미지 참고: [Medium](https://ipraveen.medium.com/react-basic-how-react-16-context-api-work-7257591589fc)*

<p>'Context'는 문맥이라는 의미입니다. 리액트에서 'Context'는 문맥 아래에 있는 컴포넌트 그룹에 데이터를 공급하는 기능을 합니다. 'Context'를 이용하면 단계마다 일일이 Props를 전달하지 않고도 컴포넌트 트리 전역에 데이터를 공급할 수 있어 'Props Drilling'문제를 해결 할 수 있습니다.</p>

<h2>2. Context 만들기</h2>

```
import React from 'react';
const MyContext = React.createContext(defaultValue);
```
<p><code>Context</code> 객체를 만듭니다. <code>Context</code> 객체를 구독하고 있는 컴포넌트를 렌더링할 때 <code>React</code>는 트리 상위에서 가장 가까이 있는 짝이 맞는 <code>Provier</code>로 부터 현재 값을 읽습니다.</p>
<ul>
  <li><code>defaultValue</code> : 트리 안에서 적절한 <code>Provider</code>를 찾지 못했을 때만 쓰이는 값입니다. <codoe>Provider</codoe>를 통해 <code>undefined</code> 값을 보낸다고 해도 구독 컴포넌트들은 <code>defalutValue</code>를 읽지 못합니다.</li>
</ul>

<h2>3. Context.Provider</h2>

```
<MyContext.Provider value={/* value */}>
<Component />
</MyContext.Provider>
```

<p><code>Provider</code> 는 <code>context</code>를 구독하는 컴포넌트들에게 <code>context</code>의 변화를 알리는 역할을 합니다. <code>Provider</code>컴포넌트는 <code>value prop</code>을 받아서 하위 컴포넌트 들에게 전달합니다. 전달받을 컴포넌트의 수에 제한은 없습니다. <code>Provider</code>하위에 <code>Provider</code> 배치도 가능하며, 이 경우에는 하위<code>Provider</code>의 값이 우선시 됩니다.</p>
<p><code>Provider</code> 하위에서 <code>context</code>를 구독하는 모든 컴포넌트는 <code>Provider</code>의 <code>value prop</code>가 바뀔 때마다 다시 렌더링 됩니다. </p>

<h2>4. useContext</h2>

```
import { useContext } from 'react';

function MyComponent() {
  const theme = useContext(ThemeContext);
  // ...
```

<p><code>useContext</code> 구성 요소의 컨텍스트 를 읽고 구독할 수 있게 해주는 React Hook입니다 .

<h2>5. 서버 사이드 렌더링, 클라이언트 사이드 렌더링</h2>

<h4>서버 사이드 렌더링</h4>

![1_B-ZwcogouWEwkqoT3gGsng](https://github.com/OliveLover/Emotion-diary-with-React/assets/118647313/4a750eab-a97f-4ed1-ae5a-5ec7db5f4270)
*이미지 참고: [Medium](https://medium.com/geekculture/server-side-rendering-simplified-fd708d5520ba)*

<h5>서버 사이드 렌더링</h5>

<p>서버 사이드 렌더링에서 페이지 라우팅은 다음과 같이 동작합니다.</p>

<br />

<p>1. 웹 브라우저에서 'mywebsite.com/mypage'라는 URL로 서비스를 요청합니다.</p>
<p>2. 웹 서버는 요청 URL에서 mypage경로를 확인하고 mypage.html을 생성해 반환합니다.</p>
<p>3. 웹 브라우저는 웹 서버에서 반환된 mypage.html을 보여줍니다.</p>

<br />

<p>사용자가 버튼 또는 링크를 클릭해 페이지를 이동할 때는 다음과 같이 동작합니다.</p>
<br />
<p>1. 웹 브라우저에 'mywebsite.com/diary'로 서비스를 요청합니다.</p>
<p>2. 웹 서버는 요청 URL에서 경로 diary를 확인하고 diary.html을 생성해 반환합니다.</p>
<p>3. 웹 브라우저는 웹 서버가 반환한 diary.html을 보여줍니다. 이때 페이지가 교체되기 때문에 브라우저가 깜빡이면서 새로고침이 발생합니다.</p>

<br />

  <h5>장점</h5>
  <ul>
  <li>검색 엔진을 최적화 하며, 처음 접속할 때 속도가 빠릅니다.</li>
    </ul>
  <h5>단점</h5>
  <ul>
  <li>사용자가 페이지를 이동할 때마다 서버가 새로운 페이지를 생성해 제공하면 많은 연산을 수행하게 됩니다. 따라서 수많은 요청이 동시에 이루어지는 서비스라면 서버에 부하가 걸릴 위험이 높아집니다.</li>
  <li>페이지를 이동할 때마다 브라우저는 서버가 제공하는 페이지를 기다려야 하기 때문에 속도가 느려집니다.</li> 
</ul>

<br />

<h5>클라이언트 사이드 렌더링</h5>

<p>리액트 앱은 html 파일이 하나뿐인 단일 페이지 애플리케이션(Single Page Application)입니다. html 파일이 하나이기 때문에 서버 사이드 가 아닌 클라이언트 사이드 렌더링으로 페이지를 라우팅 합니다. 클라이언트 사이드 렌더링에서 페이지 라우팅은 다음과 같이 동작합니다.</p>

<br />

<p>1. 웹 브라우저가 'mywebsite.com/mypage'로 서비스를 요청합니다.</p>
<p>2. 웹 서버는 요청 URL의 경로를 따지지 않고 페이지의 틀 역할을 하는 index.html과 자바스크립트 애플리케이션인 리액트 앱을 함께 반환합니다.</p>
<p>3. 웹 브라우저는 서버에서 제공된 index.html 페이지를 보여주고, 자바스크립트로 이루어진 리액트 앱을 실행합니다. 그리고 리액트 앱은 현재 경로에 맞는 페이지를 보여줍니다.</p>
<p>4. 사용자가 페이지를 이동하면 웹 브라우저는 서버에서 받은 리액트 앱을 실행해 자체적으로 페이지를 교체합니다.</p>

<br />

<h5>장점</h5>
<ul>
  <li>페이지를 이동할 때는 브라우저에서 페이지를 직접 교체하므로 속도가 매우 빠릅니다.</li>
</ul>

<br />

<h5>단점</h5>
<ul>
  <li>서버가 html 파일과 자바스크립트 애플리케이션을 함께 제공하기 때문에, 처음 사이트에 접속할 때는 서버 사이드 렌더링보다 속도가 느립니다.</li>
</ul>
<br />
<p>리액트는 기본적으로 클라이언트 사이드 렌더링을 지원하지만, 무조건적으로 서버 사이드 렌더링보다 우월하다고는 할 수 없습니다. 비즈니스 목적에 따라 적절한 방식을 택해야 합니다.</p>
<br />

<h2>6. 리액트 라우터</h2>

<p>리액트라우터(React Router) 라이브러리를 이용하면 쉽게 페이지를 라우팅 할 수 있습니다.</p>

<h3>리액트 라우터 설치</h3>

```
$ sudo npm i react-router-dom  // 웹용 라우터 설치

$ sudo npm uninstall react-router-dom // 설치한 버전 제거

$ sudo npm install react-router-dom@6 // 최신 버전 설치 
```

<h3>리액트 라우터 적용</h3>

```
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

```
import { Routes, Route, Link } from "react-router-dom";
(...)

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Component />} />
    </Routes>
    <div>
      <Link to = {"/"}>Component</Link>
    </div>
    </div>
  )
}
```

<h2>7. 리액트 라우터로 동적 경로 라우팅하기</h2>

<p>동적 경로는 'URL 파라미터'와 '쿼리 스트링' 두 가지가 있습니다.</p>

<h4>URL 파라미터</h4>
<p>URL파라미터는 URL에 유동적인 값을 넣는 방법입니다. 보통 유동적인 값은 중괄호로 표기합니다.</p>

```
https://localhost:3000/diary/{id}

ex)
https://localhost:3000/diary3
```

<h4>쿼리 스트링</h4>
<p>쿼리 스트링은 물음표(?) 뒤에 key=value 문법으로 URL에 유동적인 값을 포함하는 방법입니다.</p>

```
ex)
https://localhost:3000?sort=latest

https://localhost:3000?sort=latest&page=1 // URL에 유동적인 값을 두 개 이상 포함해야 한다면 &로 구분합니다.
```

<h4>URL 파라미터로 경로 설정하기</h4>

```
(...)
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Component />} />
      <Route path="/diary/:id" element={<Diary />} />
    </Routes>
    </div>
  )
}
(...)
```

<h4>쿼리 스트링으로 값 불러오기</h4>

```
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("sort");

```

<h2>7. 리액트 라우터로 동적 경로 라우팅하기</h2>

<p>웹 스토리지(Web Storage)는 웹브라우저가 제공하는 데이터베이스라고 할 수 있습니다. 브라우저에는 쿠키, 웹 스토리지, indexDB 등에 활용할 다양한 저장 공간이 있습니다.</p>
