import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Title from '../components/common/Title';
import HeaderButtons from '../components/HeaderButtons';
import { fetchCategories, fetchCategoryPosts } from '../actions';
import { capitalize } from '../utils/helpers';

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
    console.log('Category: ', categories);

    return (
      <div className="App">
        <Title name="Readable" />
        <HeaderButtons />

        {/* <Buttons name="All" />
          {typeof categories !== 'undefined' && categories.length > 0
            ? categories.map(({ name }) => <Buttons key={name} name={name} />)
            : null}
        </div> */}
        <div>
          <a style={{ fontSize: 15 }}> Sort By </a>
          <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange} />
          <a style={{ fontSize: 15 }}> Date </a>
          <input type="checkbox" checked={!this.state.isChecked} onChange={this.toggleChange} />
          <a style={{ fontSize: 15 }}> Score </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps, { fetchCategories, fetchCategoryPosts })(RootView);
