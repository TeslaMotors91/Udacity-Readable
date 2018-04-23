import React, { Component } from 'react';

import Title from '../components/common/Title';

// Class to handle the organization of each component, this is one of two screen/routes
class CategoryView extends Component {
  render() {
    return (
      <div className="list-books">
        <Title name="Category View" />
      </div>
    );
  }
}

export default CategoryView;
