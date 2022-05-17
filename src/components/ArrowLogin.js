// 화살표함수로 컴포넌트 작성

const ArrowLogin = (props) => {
    // props로 값을 받아와서 사용 및 출력하기
    // props로 들어오면 속성이름으로 사용
    return props.login ? (
        <div>
            <h1>로그인에 성공하였습니다</h1>
            <h3>홍길동입니다</h3>
        </div>
    ) : (
        <div>
            <h1>로그인이 필요합니다</h1>
            <p>리액트를 시작하였습니다</p>
        </div>
    );
}

export default ArrowLogin;