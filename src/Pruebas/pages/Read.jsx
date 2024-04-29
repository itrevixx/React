import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getItems } from "../app/services/people";
import { Container } from "../app/styles";


const Read = () => {
    const [patients, setPatients] = useState()

    useEffect(() => {
        consult();
    }, [])

    const consult = () => {
        getItems().then((res) => {
            setPatients(res);
            console.log(res);
        }
        )
    }
    return (
        <Container>
            <h2>Read</h2>
            <Link to={'/'}>Home</Link><br /><br />
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {patients?.map((p, key) => (
                        <tr key={key}>
                            <td><Link to={`/profile/${p.id}`}>{p.id}</Link></td>
                            <td>{p.name}</td>
                            <td>{p.surname}</td>
                            <td>{p.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}

export default Read


