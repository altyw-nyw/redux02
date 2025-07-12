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
      <ul>
        {posts.map((post => 
        <li key={post.id}>{post.title}</li>
    ))}
    </ul>
  );
};

export default PostsZustand;
