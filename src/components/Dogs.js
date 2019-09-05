import React from 'react';
import PropTypes from 'prop-types';

function Dogs({ dogs }) {
  const dogItems = dogs.map(dog => (
    <li key={dog.name}>{dog.name}</li>
  ));

  return (
    <ul>
      {dogItems}
    </ul>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;
