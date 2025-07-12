import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchComments = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
  return response.data.slice(0, 5);
};

const CommentsQuery = () => {
  const { data, isLoading, error } = useQuery({
  queryKey: ["comments"],
  queryFn: fetchComments,
});


  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
 <div>
      <h3>React Query---"Комментарии"</h3>
      <ul>
        {data.map(c => <li key={c.id}>{c.name}</li>)}
      </ul>
    </div>
  );
};

export default CommentsQuery;

