import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from '../components/User';
import { Preloader } from '../lib/PreloadContext';
import { getUser } from '../modules/users';
import { useParams } from 'react-router';
import { usePreloader } from '../lib/PreloadContext';

const UserContainer = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  usePreloader(() => dispatch(getUser(id)));

  useEffect(() => {
    if (user && user.id === parseInt(id, 10)) return;
    dispatch(getUser(id));
  }, [dispatch, id, user]);

  if (!user) {
    // return <Preloader resolve={() => dispatch(getUser(id))} />;
    return null;
  }
  return <User user={user} />;
};

export default UserContainer;
