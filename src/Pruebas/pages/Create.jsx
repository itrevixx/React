import { useNavigate } from "react-router-dom";
import { createPerson } from "../app/services/people"
import { useState } from "react"

const Create = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate()

    const handleCreateUser = () => {
        createPerson({ name, surname, date })
        navigate('/')
    }

    return (
        <div>
            <h2>Create</h2>
            <input type="text" placeholder="Patient Name" onChange={(e) => setName(e.target.value)} /><br /><br />
            <input type="text" placeholder="Patient Surname" onChange={(e) => setSurname(e.target.value)} /><br /><br />
            <input type="date" onChange={(e) => setDate(e.target.value)} /><br /><br />
            <button onClick={handleCreateUser}>Create</button>
        </div>
    )
}

export default Create
