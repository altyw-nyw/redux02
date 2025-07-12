import { create } from 'zustand';
import axios from 'axios';

export const usePostStore = create((set) => ({
  posts: [],
  loading: false,
  error: null,
  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      set({ posts: res.data.slice(0, 5), loading: false });
    } catch {
      set({ error: 'Ошибка загрузки постов', loading: false });
    }
  }
}));
