import React from 'react';

function CustomerProfile({ name, id, image }) {
  return (
    <div>
      <img src={image} alt='profile' />
      <h2>
        {name}({id})
      </h2>
    </div>
  );
}

export default CustomerProfile;
