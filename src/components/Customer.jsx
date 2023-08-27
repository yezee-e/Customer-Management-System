import React from 'react';
import CustomerProfile from './CustomerProfile';
import CustomerInfo from './CustomerInfo';

function Customer({ id, image, name, birthday, gender, job }) {
  return (
    <div>
      <CustomerProfile id={id} image={image} name={name} />
      <CustomerInfo birthday={birthday} gender={gender} job={job} />
    </div>
  );
}

export default Customer;
