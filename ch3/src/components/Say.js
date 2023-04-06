import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('black');

  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;
<<<<<<< HEAD

//부모 컴포넌트의 state를 자식 컴포넌트의 props로 전달하고,
//자식 컴포넌트에서 특정 이벤트가 발생할 때 부모 컴포넌트의 메서드를 호출하면,
//props도 유동적으로 사용할 수 있다
=======
>>>>>>> 1ada6db2deca158ece78ded91ad196a9c0867657
