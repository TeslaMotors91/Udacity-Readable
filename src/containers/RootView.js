import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Title from '../components/common/Title';
import { fetchCategories, fetchCategoryPosts } from '../actions';

// Class to handle the organization of each component, this is one of two screen/routes
class RootView extends Component {
  componentWillMount() {
    fetchCategories();
  }
  render() {
    console.log('PROPS: ', this.props.posts);

    console.log('Good Afternoon sir.');
    return (
      <div className="list-books">
        <Title name="Root View" />
        <div className="post-detail">
          <Link to="/postDetail">Post Detail</Link>
        </div>
        <div className="create-edit">
          <Link to="/createEdit">Create and Edit</Link>
        </div>
        <div className="category">
          <Link to="/category">Pick Category</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, { fetchCategories, fetchCategoryPosts })(RootView);
