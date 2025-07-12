import { useEffect } from 'react';
import { usePostStore } from '../Zustand/postStore';


const PostsZustand = () => {
  const { posts, loading, error, fetchPosts } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
      <div>
      <h3>Zustand---"Посты"</h3>
      <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>
    </div>
  );
};

export default PostsZustand;
