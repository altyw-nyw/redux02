import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store/ReduxStore';
import UsersRedux from "./components/UserRedux";
import PostsZustand from "./components/PostZustand";
import CommentsQuery from "./components/CommentQuery";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
          <UsersRedux />
          <PostsZustand />
          <CommentsQuery />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
