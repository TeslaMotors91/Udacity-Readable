import axios from 'axios';
import { FETCH_CATEGORIES, FETCH_CATEGORY_POSTS } from './types';
import { ROOT_URL, AUTH_HEADERS } from '../utils/constants';

axios.defaults.headers.common['Authorization'] = AUTH_HEADERS;

/**
 * Fetch categories
 */
export const fetchCategories = () => dispatch =>
  axios.get(`${ROOT_URL}/categories`).then(res => {
    // console.log('Categories Response: ', res);
    dispatch({ type: FETCH_CATEGORIES, payload: res.data });
  });

/**
 * Fetch category posts
 * @param  {String} category Specific type of category to fetch
 */
export const fetchCategoryPosts = category => dispatch =>
  axios.get(`${ROOT_URL}/${category}/posts`).then(res => {
    // console.log('DATA: ', res.data);
    dispatch({ type: FETCH_CATEGORY_POSTS, payload: res.data });
  });
