
import { useState } from "react"
import { useEffect } from "react"
import { getCharacters } from '../app/services/services'
import { Container } from "../app/styles"
import { Link } from "react-router-dom"

const Home = () => {


    const [characters, setCharactes] = useState()


    useEffect(() => {
        getCharacters().then((res) => {
            setCharactes(res)
        })
    }, [])

    return (
        <Container>
            {characters?.map(character => {
                return (
                    <div key={character.id} >
                        <Link to={`/profile/${character.id}`}><img src={character.image} alt="" /></Link>
                        <h3>{character.name}</h3>
                    </div>
                )
            })}
        </Container >
    )
}

export default Home