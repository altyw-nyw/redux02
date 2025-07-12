import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchComments = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
  return response.data.slice(0, 5);
};

const CommentsQuery = () => {
  const { data, isLoading, error } = useQuery(["comments"], fetchComments);

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
      <ul>
        {data.map(comment => (
        <li key={comment.id}>{comment.name}</li>
    ))}
    </ul>
  );
};

export default CommentsQuery;

