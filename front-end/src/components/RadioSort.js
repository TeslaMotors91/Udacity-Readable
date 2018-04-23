import React from 'react';
import PropTypes from 'prop-types';

const RadioSort = ({ sortBy, changeHandler }) => (
  <div className="container">
    <form>
      <small className="mr-2">Sort By:</small>
      <div className="form-check form-check-inline">
        <label className="radio-inline" htmlFor="radioDate">
          <input
            className="radio-inline"
            type="radio"
            name="inlineRadioOptions"
            id="radioDate"
            value="date"
            onChange={changeHandler}
            checked={sortBy === 'date'}
          />
          <small> Date</small>
        </label>
      </div>
      <div className="form-check form-check-inline">
        <label className="radio-inline" htmlFor="radioScore">
          <input
            className="radio-inline"
            type="radio"
            name="inlineRadioOptions"
            id="radioScore"
            value="score"
            onChange={changeHandler}
            checked={sortBy === 'score'}
          />
          <small> Score</small>
        </label>
      </div>
    </form>
  </div>
);

RadioSort.propTypes = {
  sortBy: PropTypes.oneOf(['date', 'score']).isRequired,
  changeHandler: PropTypes.func.isRequired
};

export default RadioSort;
