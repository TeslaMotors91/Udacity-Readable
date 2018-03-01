import React from 'react';
// A constant to handle the Title of the ListBooks container/screen
const Button = props => {
  return (
    <button
      onClick={this.handleClick}
      style={{
        width: '75px',
        height: '25px',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 4
      }}
    >
      {props.name}
    </button>
  );
};

export default Button;
