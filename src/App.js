import logo from './logo.svg';
import './App.css';

function App() {

  const APP_ID = '8694fae1';
  const APP_KEY = '86919c31aa9cb49e6aca72731941f836';


  const exampleRequest = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
