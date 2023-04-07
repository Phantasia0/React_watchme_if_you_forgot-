import './App.css';
import Counter from './components/Counter';
import Info from './components/Info';
import { useState } from 'react';
import Average from './components/Average';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <Counter />
      <button onClick={() => setVisible(!visible)}>
        {visible ? '숨기기' : '보이기'}
      </button>
      {visible && <Info />}
      <br />
      <Average />
    </div>
  );
}

export default App;
