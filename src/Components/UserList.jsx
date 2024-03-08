import React,{useState,useEffect} from 'react'
import axios from 'axios'
import UserTable from './UserTable'

const UserList = () => {
    const [users,setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorText, setErrorText] = useState("")


    useEffect(()=> {
        const getUsers = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                console.log(res)
                setUsers(res.data)
                setLoading(false)
            }
            catch(error){
                setLoading(true)
                setErrorText("OOPs! Something went wrong")
            }
        }

        getUsers()

    }   
       
    ,[])

  return (
    <div style = {{margin:'50px'}}> 
    {loading ? (errorText !== "" ? errorText : "Loading.....") :
    
        <UserTable data = {users}/> 
    }
    </div>
  )
}

export default UserList