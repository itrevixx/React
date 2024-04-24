/* import Router from './app/Router';

const App = () => <Router />;

export default App; */
/* 
import MyApiComponent from "./components/MyApiComponent/MyApiComponent"


const App = () => {
  return (
    <div>
      <MyApiComponent></MyApiComponent>
    </div>
  )
}

export default App */
/* 
import Router from './StarWars/app/router';

const App = () => <Router />;

export default App; */

/* import { useEffect, useState } from "react"
import { getCharacters } from "./StarWars/services/services";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);
  return <div>
    {
      characters.map((character) => (
        <div key={character.name}>
          <h1>{character.name}</h1>
        </div>
      ))};
  </div>;
}

export default App */
