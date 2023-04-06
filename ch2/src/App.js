//웹팩 로더
import './App.css';

//함수형 컴포넌트
//프로젝트에서 컴포넌트를 렌더링하면 함수에서 반환하고 있는 내용을 나타낸다.
//이런 코드를 JSX라고 한다
function App() {
  // const name = "리액트";
  const name = undefined;
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
  };

  return (
    // Virtual DOM에서 컴포넌트 변화를 감지해낼 때 효율적으로 비교할 수 있도록
    // 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문에
    // 하나의 부모요소로 감싸주어야한다.
    //<> : <Fragment>
    <>
      {/* JSX 내부에서는 자바스크립트 표현식을 쓸 수 있다 */}
      {/* {}로 감싸면 된다 */}
      <h1 style={style}>{name} 안녕</h1>
      <h2 className="react">잘 작동하니?</h2>

      {/* 조건에 따라 다른 내용 렌더링  */}
      {/* {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>} */}
      {/* {name === "리액트" && <h1>리액트입니다.</h1>} */}
      {name === '리액트' || <h1>리액트입니다.</h1>}
    </>
  );
}

export default App;

//이러한 형식으로 작성한 코드는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서
// 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환
