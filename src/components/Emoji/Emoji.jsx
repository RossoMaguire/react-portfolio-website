import PropTypes from 'prop-types';
import React from 'react';

const Emoji = ({ symbol }) => {
  return (
    <span className="emoji" role="img">
      <>{symbol}</>
    </span>
  );
};
export default Emoji;

Emoji.propTypes = {
  symbol: PropTypes.string,
};
