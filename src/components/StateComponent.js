// 클래스형 컴포넌트의 state

import {Component} from 'react';

class StateComponent extends Component {
    constructor(props) { // constructor로 this.state에 state 값을 설정후 사용
        super(props);
        this.state = {
            number : 0,
            name : '',
        }
    }
    render() {
        const { number } = this.state
        const { name } = this.state
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={()=>{
                    this.setState({ number : number + 1 }); // setState는 state 변경함수
                }}>
                    +1
                </button>
                {/* 
                함수 형식으로 setState의 내용전달
                prevState => ({state : 값}) 와 같은 형식으로 전달 ()는 return의 역할
                 */}
                <button onClick={()=>{
                    this.setState(() => ({
                        number : number +1,
                    }));
                }}>
                    +1
                </button>
                {/* 버튼을 눌렀을때 값을 0으로 초기화하는 버튼 */}
                <button onClick={()=>{
                    this.setState(() => ({
                        number : 0,
                    }));
                }}>
                    0
                </button>
                {/* 버튼을 눌렀을대 값이 -1씩 감소하는 버튼 */}
                <button onClick={()=>{
                    this.setState((prevstate) => ({
                        number : prevstate.number -1,
                    }));
                }}>
                    -1
                </button>

                <h2>{name}</h2>
                <button onClick={()=>{
                    this.setState((prevstate) => ({
                        name : "홍길동"
                    }))
                }}>
                    버튼을 누르면 이름이 나옵니다
                </button>
            </div>
        );
    }
}

export default StateComponent;