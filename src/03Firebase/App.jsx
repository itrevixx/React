import { useEffect, useState } from "react";
import { createPerson, deleteItem, getItems, updateItem } from "./app/services/people"
const App = () => {

    const [userName, setUserName] = useState();
    const [userId, setUserId] = useState();
    const [users, setUsers] = useState();

    useEffect(() => {
        consult();
    }, [])

    const consult = () => {
        getItems().then((res) => {
            setUsers(res)
        })
    }

    const handleDeleteUser = async () => {
        await deleteItem(userId);
        consult();
        setUserId("");
    };

    const handleCreateUser = async () => {
        await createPerson({ userName });
        consult();
        setUserName("");
    };

    const handleUpdate = async () => {
        await updateItem(userId, { userName });
        consult();
        setUserId, setUserName("");

    }
    return (
        <div>
            <input type="text" value={userId} placeholder="personId" onChange={(e) => setUserId(e.target.value)} />
            <input type="text" value={userName} placeholder="personName" onChange={(e) => setUserName(e.target.value)} />
            <button onClick={handleCreateUser}>Salvar</button>
            <button onClick={handleDeleteUser}>Borrar</button>
            <button onClick={handleUpdate}>Update</button>
            <div>
                {users?.map(u => <div key={u.id}>{u.id}__________{u.userName}</div>)}
            </div>
        </div>
    )
}

export default App


