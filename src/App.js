import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import ArrowComponent from './components/ArrowComponent';
import TrueComponent from './components/TrueComponent';
import FalseComponent from './components/FalseComponent';
import ArrowLogin from './components/ArrowLogin';
import StateComponent from './components/StateComponent';

import MyLogin from "./components/MyLogin";

// 함수형 컴포넌트
function App() {
  const login = false;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>내용을 수정하였습니다</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <MyComponent />
        <ArrowComponent name="3">태그사이로 전달되는 props</ArrowComponent> 
        {/* 태그 사이것은 children으로서 사용가능 (vue의 slot) */}
        {login === true ? (
          <TrueComponent />
        ) : (
          <FalseComponent />
        )}
        <ArrowLogin login='true'/> 
        {/* 
        props속성의 이름을 통해서 props 값을 전달할수있다.
        이때 들어가는 값은 문자열
        다른 자료형을 사용하려면 {}를 이용하여 자바스크립트 형태로 넣어준다.
         */}
        <StateComponent />

        <MyLogin login={true} name="성춘향" />
      </header>
    </div>
  );
}

export default App;
