import { FETCH_CATEGORIES } from '../actions/types';

export function categories(state = {}, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      // const category_obj = {};
      // console.log('Inside Reducer', action.payload.categories);
      // This is basically taking an array with object inside it
      // and making it into an object with objects inside it.
      // In the backend it is easier to send data with arrays
      // and in the front end it is easier to manage data with objects.
      // for (let category of action.payload.categories) {
      //   console.log('Category: ', category);
      //   category_obj[category.name] = category;
      // }

      return action.payload.categories;
    default:
      return state;
  }
}

export default categories;
