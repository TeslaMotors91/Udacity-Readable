import { SET_SORT_BY } from '../actions/types';

const INITIAL_STATE = 'date';

const SortByReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SORT_BY: {
      return action.sortBy;
    }
    default:
      return state;
  }
};

export default SortByReducer;
