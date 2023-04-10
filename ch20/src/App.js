import { Route, Routes } from 'react-router-dom';
import BluePage from './pages/BluePage';
import RedPage from './pages/RedPage';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
      </Routes>
    </div>
  );
}

export default App;
