const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const tasks = ['First Item', 'Second Item', 'Third Item'
    , 'Fourth Item']
  return (
    <ul>
      {tasks.map(x => task(x))}
    </ul>
  );
}

export default App;
