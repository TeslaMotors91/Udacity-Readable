import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import _ from 'lodash';
import { getAllCategories } from '../actions/CategoryActions';
import { getPostsByCategory } from '../actions/PostsActions';

const btnWidth = { width: '100px' };
const defaultStyle = 'btn btn-outline-secondary mr-2';
const activeStyle = 'btn btn-danger mr-2';

class Filter extends Component {
  state = {
    active: this.props.filter
  };

  componentDidMount() {
    this.props.getAllCategories().then(res => {
      console.log('RESPONSE IN FILTER: ', res.categories);
      // this.setState({ filters });
    });
    const { filters } = this.props;
    if (filters && filters.length > 0) {
      console.log('GETTING POSTS by Category!');
      filters.forEach(filter => {
        this.props.getPostsByCategory(filter);
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const nextFilters = nextProps.filters;
    const thisFilters = this.props.filters;
    if (thisFilters.length === 0 && nextFilters.length !== 0) {
      nextFilters.forEach(filter => {
        this.props.getPostsByCategory(filter);
      });
    }
  }

  styleSelector = filter => (this.state.active === filter ? activeStyle : defaultStyle);

  clickHandler = filter => {
    this.setState({
      active: filter
    });
  };

  render() {
    // const { filters } = this.props;

    // const renderLinks = filters.map(filter => (
    //   <Link
    //     className={this.styleSelector(filter)}
    //     to={`/${filter}`}
    //     key={filter}
    //     style={btnWidth}
    //     onClick={() => this.clickHandler(filter)}
    //   >
    //     {_.capitalize(filter)}
    //   </Link>
    // ));

    return (
      <div className="d-flex justify-content-start align-items-center">
        <Link
          className={this.styleSelector('all')}
          to="/"
          style={btnWidth}
          onClick={() => this.clickHandler('all')}
        >
          All
        </Link>
        {/* {renderLinks} */}
      </div>
    );
  }
}

Filter.defaultProps = {
  filter: 'all',
  filters: []
};

Filter.propTypes = {
  filters: PropTypes.array.isRequired,
  filter: PropTypes.string,
  getAllCategories: PropTypes.func.isRequired,
  getPostsByCategory: PropTypes.func.isRequired
};

const mapStateToProps = ({ cat }) => {
  const { categoriesArr } = cat;
  console.log('Filter', categoriesArr);
  return { filters: categoriesArr };
};

export default connect(mapStateToProps, { getAllCategories, getPostsByCategory })(Filter);
