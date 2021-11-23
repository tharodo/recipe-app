import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Recipes from './components/Recipes';

function App() {

  const APP_ID = '8694fae1';
  const APP_KEY = '86919c31aa9cb49e6aca72731941f836';

  const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipes/>        
      ))}
    </div>
  );
}

export default App;
