import React from 'react';
import { useParams } from 'react-router-dom';

const Users = ({ greetingMessage = 'Hi There' }) => {
  let { id } = useParams();
  return (
    <div>
      <h2> Users </h2>
      <p> {greetingMessage}, this is my awesome Users component - {id} </p>
    </div>
  )
};

export default Users;