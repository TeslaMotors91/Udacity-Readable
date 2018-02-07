import React, { Component } from 'react';

import Title from '../components/common/Title';

// Class to handle the organization of each component, this is one of two screen/routes
class PostDetailView extends Component {
  render() {
    return (
      <div className="list-books">
        <Title name="Post Detail View" />
      </div>
    );
  }
}

export default PostDetailView;
