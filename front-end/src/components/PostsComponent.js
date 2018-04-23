import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import CreateButton from './CreateButton';
import RadioSort from './RadioSort';
import Posts from './Posts';
import { getSortedPosts } from '../utils/helpers';

const PostsComponent = ({ filter, sortBy, posts, changeSortBy }) => (
  <div className="mt-5 container">
    <Filter filter={filter} />
    <CreateButton />
    <div className="my-4">
      <RadioSort sortBy={sortBy} changeHandler={changeSortBy} />
      <Posts posts={getSortedPosts(posts, sortBy)} />
    </div>
  </div>
);

PostsComponent.defaultProps = {
  filter: 'all'
};

PostsComponent.propTypes = {
  sortBy: PropTypes.oneOf(['date', 'score']).isRequired,
  posts: PropTypes.array.isRequired,
  changeSortBy: PropTypes.func.isRequired,
  filter: PropTypes.string
};

export default PostsComponent;
