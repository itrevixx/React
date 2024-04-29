import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { deleteItem, getItemById, updateItem } from "../app/services/people";


const Profile = () => {
    const { id } = useParams();
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [date, setDate] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        getItemById(id).then((res) => {
            const patient = res
            setName(patient.name)
            setSurname(patient.surname)
            setDate(patient.date)
        })
    }, [id])

    const handleDelete = () => {
        deleteItem(id)
        navigate('/')
    }
    const handleEdit = () => {
        updateItem(id, { name, surname, date })
        navigate('/')
    }

    return (
        <div>
            <h2>Patient Profile</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /><br /><br />
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
        </div>
    )
}

export default Profile
