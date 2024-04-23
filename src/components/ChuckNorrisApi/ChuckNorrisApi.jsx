import { useState, useEffect } from 'react';
import { getCategories } from '../../app/services/categories';
import { getJokeFromCategories } from '../../app/services/joke';



const ChuckNorrisApi = () => {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response);
    });
  }, []);

  const [joke, setJoke] = useState([]);
  useEffect(() => {
    getJokeFromCategories(categories).then((response) => {
      console.log(response)
      setJoke(response);
    });
  }, [categories]);

  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li
            key={category}>
            <button
              key={category}
              onClick={() => {
                getJokeFromCategories(category).then((j) => setJoke(j));
              }}>
              {category}
            </button>
          </li>
        ))}
      </ul>
      <p>{joke}</p>
    </div>
  )
};

export default ChuckNorrisApi;


