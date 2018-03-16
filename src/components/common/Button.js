import React from 'react';
import Radium from 'radium';
// A constant to handle the Title of the ListBooks container/screen

class Button extends React.Component {
  render() {
    // Inside render
    return (
      //   <button style={[styles.base, this.props.block && styles.block]}>{this.props.children}</button>
      <div>
        <button key="keyForButton" style={[styles.button]}>
          Hover me!
        </button>
        {Radium.getState(this.state, 'keyForButton', ':hover') ? <span> Hovering!</span> : null}
      </div>
    );
  }
}

var styles = {
  base: {
    background: 'blue',
    border: 0,
    borderRadius: 4,
    color: 'white',
    padding: '1.5em',

    ':hover': {
      backgroundColor: 'red'
    },

    ':focus': {
      backgroundColor: 'green'
    },

    ':active': {
      backgroundColor: 'yellow'
    }
  },

  block: {
    display: 'block',

    ':hover': {
      boxShadow: '0 3px 0 rgba(0,0,0,0.2)'
    }
  },
  button: {
    // Even though we don't have any special styles on the button, we need
    // to add empty :hover styles here to tell Radium to track this element's
    // state.
    ':hover': {}
  }
};

export default Radium(Button);
