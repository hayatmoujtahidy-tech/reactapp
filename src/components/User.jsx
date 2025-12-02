import axios from 'axios'
import React, { useEffect, useState } from 'react'


const User = () => {
    const[users,setUsers] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(Response => setUsers(Response.data))
        .catch(error=> console.log("il ya une error")
        )
    },[])
    
  return (
    <div>{users.map(user => (
        <h1 key={user.id}>{user.name}</h1>
        ))}

    </div>
  )
}

export default User