import { useEffect, useState } from "react"
import { access, getPerson } from "../app/services/people"

const Home = () => {

    const [users, setUsers] = useState()
    const [name, setName] = useState()


    useEffect(() => {
        consult();
    }, [])

    const consult = () => {
        getPerson().then((res) => {
            setUsers(res)
            console.log(res)
        })
    }

    const handleClickCreate = () => {
        access(name)
        consult();
    }

    return (
        <div>
            <p>Introduce tu nombre. Si no está en la base de datos, se creará.</p><br />
            <input type="text" onChange={(e) => setName(e.target.value)} /><br /><br />
            <button onClick={handleClickCreate}>Acceder</button>
            {users?.map(user => <p key={user.id}>{user.name}<br /><br />{user.id}</p>)}
        </div>
    )
}

export default Home
