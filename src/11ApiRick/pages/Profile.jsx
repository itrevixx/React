import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getCharacterById, getEpisodes } from "../app/services/services";
import { Container2, Episodes, Ep } from "../app/styles";


const Profile = () => {

    const { id } = useParams();
    const [profile, setProfile] = useState();
    const [episodios, setEpisodios] = useState();


    useEffect(() => {
        getCharacterById(id).then((res) => {
            setProfile(res);
            getEpisodes(res.episode).then((episode) => {
                setEpisodios(episode);
                /* cuando lo que le entra a la funcion es igual a lo que le paso a la funcion aninada puedes 
                hacerlo en una linea --> getEpisodes(res.episode).then((episode) */
            })
        })
    }, [id])


    return (
        <Container2>
            <img src={profile?.image} alt="" />
            <h3>Name: {profile?.name}</h3>
            <h3>Specie: {profile?.species}</h3>
            <h3>Status: {profile?.status}</h3>
            <h3>Gender: {profile?.gender}</h3>
            <h3>Episodes</h3>
            <Episodes>
                {
                    episodios?.map(ep => (
                        <Ep key={ep.id}><p>{ep.name}</p></Ep>
                    ))
                }
            </Episodes>
            <p><Link to={'/'}>Home</Link></p>
        </Container2>
    )
}

export default Profile
