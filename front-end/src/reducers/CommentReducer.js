import _ from 'lodash';
import {
  FETCH_POST_COMMENTS,
  FETCH_COMMENT_POST,
  FETCH_POST_COMMENTS_COUNT,
  EDIT_COMMENT_POST,
  DELETE_COMMENT_POST,
  VOTE_COMMENT
} from '../actions/types';

const INITIAL_STATE = {
  commentCount: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POST_COMMENTS:
      return _.mapKeys(action.payload, 'id');
    case FETCH_COMMENT_POST:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case FETCH_POST_COMMENTS_COUNT:
      const { postId, count } = action.payload;
      return {
        ...state,
        commentCount: {
          ...state['commentCount'],
          [postId]: count
        }
      };
    case EDIT_COMMENT_POST:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case DELETE_COMMENT_POST:
      return _.omit(state, action.payload);
    case VOTE_COMMENT:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
}

import {
  FETCH_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case RETRIEVE_COMMENTS:
      const comments_obj = {};

      for (let comment of action.comments) {
        comments_obj[comment.id] = comment;
      }

      return comments_obj

    case ADD_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }
    case UPDATE_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }
    case DELETE_COMMENT:
        delete state[action.comment.id]
        return {
          ...state,
        }
    default:
      return state
  }
}
