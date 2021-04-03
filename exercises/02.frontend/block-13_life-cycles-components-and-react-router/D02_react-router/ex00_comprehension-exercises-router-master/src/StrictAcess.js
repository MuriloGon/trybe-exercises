import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    console.log(this.props);
    const { username, password } = this.props.user;
    if (!(username === 'joao' && password === '1234')) {
      alert('Access denied');
      return <Redirect to="/" />
    } else
    return (
      <p>Welcome joao!</p>
    );
  }
}

export default StrictAccess;