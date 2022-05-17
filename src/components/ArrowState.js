// 함수형 컴포넌트에서 state값 사용방법
// useState는 리액트 16.8에서 추가되었음 - 그 이전에는 클래스형으로 사용
import { useState } from "react";

const ArrowState = () => {
    // useState()의 반환값이 [값, 값을 수정하는 메소드]
    // number의 값은 useState(0)안에 할당한 값
    // 비구조화를 통해 할당
    // setNumber메소드는 setState와 동일한 역할
    const [number, setNumber] = useState(0);
    // name 값이 홍길동인 state를 추가하고 h1 태그에 출력하세요
    const [name, setName] = useState('홍길동');
    // 버튼을 눌렀을때 name 값을 성춘향으로 바꿔주세요
    return (
    <div>
        <h1>{number}</h1>
        <button onClick={()=>{
            setNumber(number+1);
        }}>
            +1
        </button>

        <h1>{name}</h1>
        <button onClick={()=>{
            setName("성춘향");
        }}>
            이름변경
        </button>
    </div>
    );
};

export default ArrowState;