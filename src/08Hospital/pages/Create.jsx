import { useState } from "react";
import { createPerson } from "../app/services/people";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [userName, setUserName] = useState('');
    const [userSurName, setUserSurName] = useState('');
    const [userDate, setUserDate] = useState('');
    const navigate = useNavigate()

    const handleClickCreate = () => {
        createPerson({ userName, userSurName, userDate });
        navigate("/")
    }

    return (
        <div>
            <h2>Create</h2>
            <input type="text" value={userName} placeholder="Pacient Name" onChange={(e) => setUserName(e.target.value)} /><br /><br />
            <input type="text" placeholder="Pacinet Surname" onChange={(e) => setUserSurName(e.target.value)} /><br /><br />
            <input type="date" onChange={(e) => setUserDate(e.target.value)} /><br /><br />
            <button onClick={handleClickCreate}>Create</button>
        </div>
    )
}


export default Create
