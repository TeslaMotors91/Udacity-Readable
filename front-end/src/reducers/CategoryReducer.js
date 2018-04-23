import { FETCH_CATEGORIES, GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  categories: [],
  categoriesArr: []
};

export function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload.categories };
    case GET_ALL_CATEGORIES: {
      const categoriesArr = action.payload.categories.map(category => category.name);
      return { ...state, categoriesArr: categoriesArr };
    }
    case GET_ALL_CATEGORIES_SUCCESS: {
      const categories = action.categories.map(category => category.name);
      return [...categories];
    }
    default:
      return state;
  }
}

export default categories;
