import React from 'react'
import { fetchUsers } from './fetchUser'

const Github = () =>{
  const [query,setQuery] = React.useState("")
  const [isLoading,setIsLoading] = React.useState(false)
  const [isError,setisError] = React.useState(false)
  const [users,setUsers] = React.useState([])
  
  React.useEffect(() =>{
    setIsLoading(true)
    setisError(false)
    fetchUsers("masai")
    .then(res=>{
        setUsers(res.data.items)
    })
    .catch((err)=>{
      setisError(true);
    })
    .finally(()=>{
      setIsLoading(false)
    })
  },[])
  const handleSearch = ()=>{
    setIsLoading(true)
    setisError(false)
    fetchUsers(query)
    .then(res=>{
        setUsers(res.data.items)
    })
    .catch((err)=>{
      setisError(true);
    })
    .finally(()=>{
      setIsLoading(false)
    })
  }
    return (
        <>
           <div>
            <h1>Github</h1>
              <input value = {query}
              onChange = {(e)=>setQuery(e.target.value)}
              placeholder = "Search"></input>
              <button disabled={isLoading} onClick = {handleSearch}>{isLoading?"LOADING":"SEARCH"}</button>
           </div>
           {isError?"Please fill the text":null}
           <div>
             {users?.map((item)=>(
                 <div key={item.id}>{item.login}</div>
               ))}
           </div>
        </>
       
    )
}
export {Github}