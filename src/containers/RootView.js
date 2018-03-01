import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import Title from '../components/common/Title';
import Button from '../components/common/Button';
import { fetchCategories, fetchCategoryPosts } from '../actions';
import { capitalize } from '../utils/helpers';

// Class to handle the organization of each component, this is one of two screen/routes
class RootView extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
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
        <Button name={'All'} key={'All'} onClick={this.handleClick} />
        {_.map(categories, category => (
          <Button name={capitalize(category.name)} key={category.name} onClick={this.handleClick} />
        ))}
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
