import UsersContainer from '../container/UsersContainer';
import UserContainer from '../container/UserContainer';
import { Route, Routes } from 'react-router';

const UsersPage = () => {
  return (
    <>
      <UsersContainer />
      <Routes>
        <Route
          path="/:id"
          element={<UserContainer />}
          //render={({ match }) => <UserContainer id={match.params.id} />}
        />
      </Routes>
    </>
  );
};

export default UsersPage;
