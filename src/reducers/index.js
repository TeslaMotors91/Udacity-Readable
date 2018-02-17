import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import PostsReducer from './PostReducer';
import CategoriesReducer from './CategoryReducer';
// import CommentsReducer from './CommentsReducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  categories: CategoriesReducer,
  // comments: CommentsReducer,
  form: FormReducer
});

export default rootReducer;
