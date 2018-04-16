import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';

class HeaderButtons extends Component {
  render() {
    const { store } = this.props;
    return (
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link className={'btn btn-primary btn-xl'} to="/">
              All
            </Link>
          </li>
          {store.categories.map(category => (
            <li className="nav-list-item" key={category.name}>
              <Link className={'btn btn-primary btn-xl'} to={`/${category.path}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(store) {
  const catKeys = Object.keys(store.categories);
  return {
    store: {
      categories: catKeys.map(key => ({
        name: store.categories[key].name,
        path: store.categories[key].path
      }))
    }
  };
}

export default connect(mapStateToProps)(HeaderButtons);
