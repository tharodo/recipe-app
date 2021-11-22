import logo from './logo.svg';
import './App.css';

function App() {

  const APP_ID = '8694fae1';
  const APP_KEY = '86919c31aa9cb49e6aca72731941f836';


  const exampleRequest = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


  return (
    <div className="App">
      <h1>Hello from React</h1>
    </div>
  );
}

export default App;
