import { useState } from 'react';
import { deleteItem } from '../app/services/people';
import Query from '../components/Query/Query';
import { Container } from './styles';


const Delete = () => {
    const [userId, setUserId] = useState()
    const [ejecutarEfectoHijo, setEjecutarEfectoHijo] = useState(false);
    const handleDeleteUser = async () => {
        await deleteItem(userId)
        setEjecutarEfectoHijo(!ejecutarEfectoHijo)
    }
    return (
        <Container>
            <h2>Delete</h2>
            <input type="text" placeholder="Guess ID" onChange={(e) => setUserId(e.target.value)} />
            <button onClick={handleDeleteUser}>Delete</button>
            <br /><br />
            <Query isIdVisible={true} refresh={ejecutarEfectoHijo} />
        </Container>
    )
}

export default Delete
