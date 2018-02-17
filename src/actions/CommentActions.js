import _ from 'lodash';
import axios from 'axios';
import {
  FETCH_POST_COMMENTS,
  FETCH_POST_COMMENTS_COUNT,
  FETCH_COMMENT_POST,
  CREATE_COMMENT_POST,
  EDIT_COMMENT_POST,
  DELETE_COMMENT_POST,
  VOTE_COMMENT
} from './types';
import { ROOT_URL, AUTH_HEADERS, setToken } from '../utils/constants';

axios.defaults.headers.common['Authorization'] = AUTH_HEADERS;

/**
 * Fetch post comments
 * @param  {String} postId Post ID
 */
export const fetchPostComments = postId => dispatch => {
  return axios.get(`${ROOT_URL}/posts/${postId}/comments`).then(res => {
    dispatch({ type: FETCH_POST_COMMENTS, payload: res.data });
  });
};

/**
 * Isolate nested post comment count from fetch post comment
 * @param  {String} postId Post ID
 */
export const fetchPostCommentsCount = postId => dispatch => {
  return axios.get(`${ROOT_URL}/posts/${postId}/comments`).then(res => {
    const comments = _.filter(res.data, comment => !comment.deleted);
    const count = Object.keys(comments).length;
    const data = { postId, count };
    dispatch({ type: FETCH_POST_COMMENTS_COUNT, payload: data });
  });
};

/**
 * Fetch comment from a post
 * @param  {String} Id Post ID
 */
export const fetchCommentPost = id => dispatch => {
  return axios
    .get(`${ROOT_URL}/comments/${id}`)
    .then(res => dispatch({ type: FETCH_COMMENT_POST, payload: res.data }));
};

/**
 * Create post comment
 * @param  {Object} values Body and Author
 * @param  {String} parentId Post ID
 */
export const createPostComment = (values, parentId) => dispatch => {
  const { body, author } = values;

  const data = {
    id: setToken(),
    parentId,
    timestamp: Date.now(),
    body,
    author
  };

  return axios.post(`${ROOT_URL}/comments`, data).then(res => {
    dispatch({ type: CREATE_COMMENT_POST, payload: res.data });
  });
};

/**
 * Edit post comment
 * @param  {String} values
 * @param  {String} id Comment ID
 */
export const editPostComment = (id, values) => dispatch => {
  return axios.put(`${ROOT_URL}/comments/${id}`, values).then(res => {
    dispatch({ type: EDIT_COMMENT_POST, payload: res.data });
  });
};

/**
 * Delete post comment
 * @param  {String} parentId Post id
 */
export const deleteCommentPost = id => dispatch => {
  return axios.delete(`${ROOT_URL}/comments/${id}`).then(res => {
    dispatch({ type: DELETE_COMMENT_POST, payload: res.data });
  });
};

/**
 * Vote for post comment
 * @param  {String} id Comment ID
 * @param  {String} vote Number representing a vote
 */
export const voteForComment = (id, vote) => dispatch => {
  return axios
    .post(`${ROOT_URL}/comments/${id}`, { option: vote })
    .then(res => dispatch({ type: VOTE_COMMENT, payload: res.data }))
    .catch(err => console.log(err));
};
