import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { deleteItem, getItemById, updateItem } from '../app/services/people';


const Profile = () => {
    const { id } = useParams();
    const [userName, setUserName] = useState();
    const [userSurName, setUserSurName] = useState();
    const [userDate, setUserDate] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        getItemById(id).then((res) => {
            const user = res
            setUserName(user.userName);
            setUserSurName(user.userSurName);
            setUserDate(user.userDate);
        })
    }, [id]);

    const handleClickDelete = () => {
        deleteItem(id);
        navigate('/')
    }

    const handleClickUpdate = () => {
        updateItem(id, { userName, userSurName, userDate });
        navigate('/')
    }

    return (
        <div>
            <h2>Update y Delete</h2>
            <div>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input type="text" value={userSurName} onChange={(e) => setUserSurName(e.target.value)} />
                <input type="date" value={userDate} onChange={(e) => setUserDate(e.target.value)} /><br /><br />
            </div>
            <button onClick={handleClickDelete}>Delete</button>
            <button onClick={handleClickUpdate}>Update</button>
        </div>
    )
}

export default Profile
