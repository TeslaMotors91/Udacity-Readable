import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import PostReducer from './PostReducer';
import PostsReducer from './PostsReducer';
import CategoriesReducer from './CategoryReducer';
// import CommentsReducer from './CommentsReducer';

const rootReducer = combineReducers({
  post: PostReducer,
  posts: PostsReducer,
  cat: CategoriesReducer,
  // comments: CommentsReducer,
  form: FormReducer
});

export default rootReducer;
