import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';

class HeaderButtons extends Component {
  render() {
    const { categories } = this.props;
    return (
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link className={'btn btn-primary btn-xl'} to="/">
              All
            </Link>
          </li>
          {categories.length === 0
            ? null
            : categories.map(category => (
                <li key={category.name} className="nav-list-item">
                  <Link
                    key={category.name}
                    className={'btn btn-primary btn-xl'}
                    to={`/${category.path}`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = ({ cat }) => {
  const { categories } = cat;
  return { categories };
};

export default connect(mapStateToProps)(HeaderButtons);
