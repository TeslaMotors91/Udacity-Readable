import { SET_SORT_BY } from './types';

export const setSortBy = sortBy => {
  console.log('SORT BY: ', sortBy);
  return {
    type: SET_SORT_BY,
    sortBy: sortBy
  };
};
