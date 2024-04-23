import { useState, useEffect } from 'react';
import { getPeople } from '../../app/services/people';
import { getIdFromUrl } from '../../app/utils';
import { useParams } from 'react-router-dom';

const StarWarsApi = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    getPeople(id).then((response) => {
      setCharacter(response.results);
    });
  }, [id]);


  return (
    <div>
      {character.map(char => {
        const id = getIdFromUrl(char.url);
        return (
          <div key={char}>
            <h2>{char.name}</h2>
            <img src={"https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"} />
          </div>
        )
      })}
    </div>
  )
};
export default StarWarsApi;

