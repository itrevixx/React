
import { useState } from "react"
import { createPerson } from "../app/services/people"
import { Container } from "./styles";


const Create = () => {
    const [userName, setUserName] = useState();

    const handleCreateUser = async () => {
        await createPerson({ userName })
    }
    return (
        <Container>
            <h2>Create</h2>
            <input type="text" placeholder="Guest Name" onChange={(e) => setUserName(e.target.value)} />
            <button onClick={handleCreateUser}>Create</button>
        </Container>
    )
}

export default Create



