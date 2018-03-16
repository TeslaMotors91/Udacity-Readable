import React from 'react';

const styles = {
  buttonStyle: {
    height: 23,
    width: 100,
    flexDirection: 'row',
    margin: 2,
    marginLeft: 4,
    marginRight: 4,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const Buttons = props => {
  return <button style={styles.buttonStyle}>{props.name}</button>;
};

export default Buttons;
