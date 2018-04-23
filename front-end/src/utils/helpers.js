import _ from 'lodash';

export function capitalize(str = '') {
  return typeof str !== 'string' ? '' : str[0].toUpperCase() + str.slice(1);
}

export const getSortedPosts = (posts, order) => {
  if (order === 'date') {
    return _.orderBy(posts, ['timestamp', 'voteScore'], ['desc', 'desc']);
  } else if (order === 'score') {
    return _.orderBy(posts, ['voteScore', 'timestamp'], ['desc', 'desc']);
  }
  return posts;
};

export function dateFormat(timestamp) {
  return new Date(timestamp).toString();
}
