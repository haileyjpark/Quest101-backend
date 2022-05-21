import React from 'react';

const HeartButton = props => {
  const { icon } = props;

  return (
    <div>
      <p>{icon}</p>
    </div>
  );
};

export default HeartButton;
