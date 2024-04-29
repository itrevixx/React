import { useEffect, useState } from "react"
import { getItems } from "../app/services/people";
import { Table } from "../app/styles";
import { Link } from "react-router-dom";

const Read = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        consult();
    }, [])

    const consult = () => {
        getItems().then((res) => {
            setUsers(res)
            console.log(res)
        })
    }

    return (
        <div>
            <Link to={'/'}>Home</Link>
            <h2>Read</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((u, key) => (
                        <tr key={key}>
                            <td><Link to={`/profile/${u.id}`}>{u.id}</Link></td>
                            <td>{u.userName}</td>
                            <td>{u.userSurName}</td>
                            <td>{u.userDate}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Read
