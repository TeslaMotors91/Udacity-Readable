import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import Title from '../components/common/Title';
import { fetchCategories, fetchCategoryPosts } from '../actions';
import { capitalize } from '../utils/helpers';

// Class to handle the organization of each component, this is one of two screen/routes
class RootView extends Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  renderCategory(category) {
    return (
      <div key={category.name} className={category.name}>
        <Link to={`/${category.path}>`}>{capitalize(category.name)}</Link>
      </div>
    );
  }

  render() {
    const { categories } = this.props;

    return (
      <div className="list-books">
        <Title name="Root View" />
        {/* _props.map(prop => this.props.updateField(prop, props[prop])); */}
        {_.map(categories, category => this.renderCategory(category))}
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

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps, { fetchCategories, fetchCategoryPosts })(RootView);
