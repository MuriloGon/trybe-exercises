import React from 'react';
import './DogCard.css';

class DogCard extends React.Component {
  state = {
    data: [],
    loading: true,
  }

  async fetchData() {
    const headers = {
      headers: { Accept: 'application/json' }
    }
    const request = await fetch('https://dog.ceo/api/breeds/image/random', headers);
    const requestedObj = await request.json();

    this.setState((st) => ({ data: requestedObj, loading: !st.loading }),);
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { message } = this.state.data;
    const { loading } = this.state;
    const breed = loading ? 'Loading...' : message.match(/\/breeds\/([\s\S]{1,})\//)[1].split('-').join(' ');
    return (
      <div className="DogCard">
        <h3>Breed: {breed}</h3>
        <div className='image'>
          {loading ? <img src='imgs/loading.gif' alt='loading' /> : <img src={message} alt={breed} />}
        </div>
      </div>
    );
  }
}

export default DogCard;