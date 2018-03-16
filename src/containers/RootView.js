import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import Title from '../components/common/Title';
import Button from '../components/common/Buttons';
import Buttons from '../components/common/Buttons';
import { fetchCategories, fetchCategoryPosts } from '../actions';
import { capitalize } from '../utils/helpers';

const btnWidth = { width: '100px' };
const defaultStyle = 'btn btn-outline-secondary mr-2';
const activeStyle = 'btn btn-danger mr-2';

// Class to handle the organization of each component, this is one of two screen/routes
class RootView extends Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: true };
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

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
      <div className="list-categories">
        <Title name="Readable" />
        <div>
          <Buttons name="All" />
          <Buttons name="React" />
          <Buttons name="Redux" />
          <Buttons name="Udacity" />
        </div>
        <a style={{ fontSize: 15 }}> Sort By </a>
        <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange} />
        <a style={{ fontSize: 15 }}> Date </a>
        <input type="checkbox" checked={!this.state.isChecked} onChange={this.toggleChange} />
        <a style={{ fontSize: 15 }}> Score </a>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps, { fetchCategories, fetchCategoryPosts })(RootView);
