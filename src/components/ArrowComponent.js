import {PropTypes} from 'prop-types';

// 화살표 함수로 만드는 컴포넌트
// 모듈로 내보내기 위해 ArrowComponent에 담아서 내보낸다.
const ArrowComponent = (props) => {
    // 비구조화 할당 문법을 통해 props의 내부값을 추출하여 사용
    const { name, children } = props;
    return <div> 
                <p>{children}</p> 
                <p>{name}</p>
                {/* props.children을 통해서 vue의 슬롯같이 값을 사용할수있다. */}
                화살표 함수로 만든 컴포넌트입니다
            </div>
};
// app.js에서 값을 작성해주지않으면 아래 값으로 들어가서 출력된다
ArrowComponent.defaultProps = {
    name: "기본이름",
};

ArrowComponent.propTypes = {
    name : PropTypes.string,
}
export default ArrowComponent;