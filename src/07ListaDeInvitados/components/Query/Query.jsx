import { useEffect, useState } from 'react';
import { getItems } from '../../app/services/people';


const Query = ({ refresh, isIdVisible }) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    consult();
  }, [refresh])

  const consult = () => {
    getItems().then((res) => {
      setUsers(res)

    })
  }
  return (
    <div>
      {users?.map((u, key) => <div key={key}>Name: {u.userName} {isIdVisible && <>___________ Id: {u.id}</>}</div>)}
    </div>
  )
}


export default Query;
