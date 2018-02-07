import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Title from '../components/common/Title';

// Class to handle the organization of each component, this is one of two screen/routes
class RootView extends Component {
  render() {
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

export default RootView;
