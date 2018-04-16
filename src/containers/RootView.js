import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategories, fetchCategoryPosts } from '../actions';

// Class to handle the organization of each component, this is one of two screen/routes
class RootView extends Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    return <div className="App" />;
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps, { fetchCategories, fetchCategoryPosts })(RootView);
