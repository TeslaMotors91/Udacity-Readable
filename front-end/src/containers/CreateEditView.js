import React, { Component } from 'react';

import Title from '../components/common/Title';

// Class to handle the organization of each component, this is one of two screen/routes
class CreateEditView extends Component {
  render() {
    return (
      <div className="list-books">
        <Title name="Create and Edit View" />
      </div>
    );
  }
}

export default CreateEditView;
