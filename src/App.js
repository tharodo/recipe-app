import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const APP_ID = '8694fae1';
  const APP_KEY = '86919c31aa9cb49e6aca72731941f836';

  const [counter, setCounter] = useState(0);


  const exampleRequest = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    console.log('Effect has been run!');
  }, [])

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h2 
        onClick={() => setCounter(counter + 1)}
      >
        {counter}
      </h2>
    </div>
  );
}

export default App;
