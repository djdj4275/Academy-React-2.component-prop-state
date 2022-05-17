import {Component} from 'react';

class FalseComponent extends Component {
    // 클래스형 컴포넌트에서는 함수 대신에 render를 통해 내보낸다.
    render() {
        return (
            <div>
                <h1>로그인이 필요합니다</h1>
                <p>리액트를 시작하였습니다</p>
            </div>
        );
    }
}
export default FalseComponent;