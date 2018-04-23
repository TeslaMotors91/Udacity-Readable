import axios from 'axios';
import { FETCH_POST, FETCH_POSTS, CREATE_POST, EDIT_POST, DELETE_POST, VOTE_POST } from './types';
import { ROOT_URL, AUTH_HEADERS, setToken } from '../utils/constants';

axios.defaults.headers.common['Authorization'] = AUTH_HEADERS;

/**
 * Fetch all posts
 */
export const fetchPosts = () => dispatch => {
  return dispatch => {
    axios.get(`${ROOT_URL}/posts`).then(res => dispatch({ type: FETCH_POSTS, payload: res.data }));
  };
};

/**
 * Fetch single post
 * @param  {String} id Post ID
 */
export const fetchPost = id => dispatch => {
  axios
    .get(`${ROOT_URL}/posts/${id}`)
    .then(res => dispatch({ type: FETCH_POST, payload: res.data }));
};

/**
 * Create post
 * @param  {Object} values Contains post title, body, author, and category
 */
export const createPost = values => dispatch => {
  const { title, body, author, category } = values;

  const data = {
    id: setToken(),
    timestamp: Date.now(),
    title,
    body,
    author,
    category
  };

  return axios.post(`${ROOT_URL}/posts`, data).then(res => {
    dispatch({ type: CREATE_POST, payload: res.data });
  });
};

/**
 * Edit post
 * @param  {String} id Post ID
 * @param  {String} values TBD
 */
export const editPost = (id, values) => dispatch => {
  return axios.put(`${ROOT_URL}/posts/${id}`, values).then(res => {
    dispatch({ type: EDIT_POST, payload: res.data });
  });
};

/**
 * Delete post comments
 * @param  {String} id Post ID
 */
export const deletePost = id => dispatch => {
  return axios.delete(`${ROOT_URL}/posts/${id}`).then(res => {
    dispatch({ type: DELETE_POST, payload: id });
  });
};

/**
 * Vote on post
 * @param  {String} id Post ID
 * @param  {String} vote TBD
 */
export const voteForPost = (id, vote) => dispatch => {
  return axios.post(`${ROOT_URL}/posts/${id}`, { option: vote }).then(res => {
    dispatch({ type: VOTE_POST, payload: res.data });
  });
};
