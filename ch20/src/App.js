import { Route, Routes } from 'react-router-dom';
import BluePage from './pages/BluePage';
import RedPage from './pages/RedPage';
import Menu from './components/Menu';
import UsersContainer from './container/UsersContainer';

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
        <Route path="/users" element={<UsersContainer />} />
      </Routes>
    </div>
  );
}

export default App;
