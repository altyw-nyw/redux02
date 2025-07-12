import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../Store/userSlice';


const UsersRedux = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "loading") return <p>Загрузка...</p>;
  if (status === "failed") return <p>Ошибка: {error}</p>;

  return (
      <ul>
        {users.map((user => 
        <li key={user.id}>{user.name}</li>
        ))}
    </ul>
  );
};

export default UsersRedux;
