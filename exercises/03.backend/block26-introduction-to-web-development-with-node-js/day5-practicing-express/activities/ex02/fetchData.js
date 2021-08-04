import fet from 'node-fetch';

async function fetchData() {
  const ENDPOINT = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
  try {
    const res = await fet(ENDPOINT);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
export default fetchData;
