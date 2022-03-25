import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
    .then(res => {
      console.log(res.data[0].name)
      console.log(res.data[1].name)
      console.log(res.data[2].name)
      console.log(res.data[3].name)
      console.log(res.data[4].name)
      console.log(res.data[5].name) 
      setData(res.data);
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data && <CharacterCard character={data} /> }
    </div>
  );
}

export default App;
