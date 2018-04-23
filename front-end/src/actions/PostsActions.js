import axios from 'axios';
import {
  GET_POSTS_BY_CATEGORY,
  DELETE_POST,
  UPVOTE_TO_POST,
  DOWNVOTE_TO_POST,
  ADD_POST,
  EDIT_POST_BY_POST_ID
} from './types';
import { ROOT_URL, AUTH_HEADERS } from '../utils/constants';

axios.defaults.headers.common['Authorization'] = AUTH_HEADERS;

/**
 * Fetch posts by category
 * @param  {String} category Specific type of category to fetch
 */
export const getPostsByCategory = category => dispatch =>
  axios.get(`${ROOT_URL}/${category}/posts`).then(res => {
    console.log('Fetch Category Posts: ', res.data);
    dispatch({ type: GET_POSTS_BY_CATEGORY, payload: res.data });
  });

export const deletePost = id => ({
  type: DELETE_POST,
  id
});

export const upVoteToPost = id => ({
  type: UPVOTE_TO_POST,
  id
});

export const downVoteToPost = id => ({
  type: DOWNVOTE_TO_POST,
  id
});

export const addPost = post => ({
  type: ADD_POST,
  post
});

export const editPostByPostId = post => ({
  type: EDIT_POST_BY_POST_ID,
  post
});
