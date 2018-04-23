import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostsContainer from '../components/PostsComponent';
import { setSortBy } from '../actions/SortActions';

import '../App.css';

// Class to handle the organization of each component, this is one of two screen/routes
class RootView extends Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: true, sortBy: 'date' };
  }
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };
  changeSortBy = e => {
    this.props.setSortBy(e.target.value);
  };

  render() {
    const { posts, categories, sortBy } = this.props;
    const allPosts = [];
    if (typeof categories !== 'undefined') {
      if (categories.length > 0 && posts) {
        categories.forEach(category => {
          if (posts[category] && posts[category].length > 0) {
            posts[category].forEach(post => allPosts.push(post));
          }
        });
      }
    }

    return <PostsContainer sortBy={sortBy} posts={allPosts} changeSortBy={this.changeSortBy} />;
  }
}

RootView.propTypes = {
  posts: PropTypes.object.isRequired,
  categoriesArr: PropTypes.array.isRequired,
  sortBy: PropTypes.oneOf(['date', 'score']).isRequired,
  setSortBy: PropTypes.func.isRequired
};

const mapStateToProps = ({ posts, cat, sortBy }) => {
  const { categoriesArr } = cat;
  return {
    posts,
    categoriesArr,
    sortBy
  };
};

export default connect(mapStateToProps, { setSortBy })(RootView);
