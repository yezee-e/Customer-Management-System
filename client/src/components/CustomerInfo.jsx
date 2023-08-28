import React from 'react';

function CustomerInfo({ birthday, gender, job }) {
  return (
    <div>
      <p>{birthday}</p>
      <p>{gender}</p>
      <p>{job}</p>
    </div>
  );
}

export default CustomerInfo;
