import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateButton extends Component {
  render() {
    return (
      <div className="CreateButton-Container">
        <div className="CreateButton">
          <p>
            <Link className="CreateButton" to="/create">
              +
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default CreateButton;
