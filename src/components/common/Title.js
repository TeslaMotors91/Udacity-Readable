import React from 'react';
import PropTypes from 'prop-types';

// A constant to handle the Title of the ListBooks container/screen
const Title = props => {
  return (
    <div className="header-title">
      <h1
        style={{
          fontFamily: 'sansSerif',
          fontSize: 20,
          textAlign: 'center',
          backgroundColor: '#343a40',
          color: 'white'
        }}
      >
        {props.name}
      </h1>
    </div>
  );
};

Title.defaultProps = {
  name: 'My Reads'
};

Title.propTypes = {
  name: PropTypes.string.isRequired
};

export default Title;
