import React,{useState,useEffect} from 'react'
import axios from 'axios'
import UserTable from './UserTable'
import ErrorDisplay from './ErrorDisplay'
import Loading from './Loading'

const UserList = () => {
    const [users,setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorText, setErrorText] = useState("")


    useEffect(()=> {
        const getUsers = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                setUsers(res.data)
                setLoading(false)
            }
            catch(error){
                setLoading(true)
                setErrorText("OOPs! Something went wrong ,Please refresh the page")
            }
        }

        getUsers()

    }   
       
    ,[])

  return (
    <div style = {{margin:'50px'}}> 
    {loading ? (errorText !== "" ? <ErrorDisplay msg = {errorText} /> : <Loading/>) :
        <UserTable data = {users}/> 
    }
    </div>
  )
}

export default UserList