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
      <div>
      <h3>Redux Toolkit---"Пользователи"</h3>
      <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
    </div>
  );
};


export default UsersRedux;
