import React from 'react'
import { loginUser } from './loginUser';

const Login = ()=>{
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [token,setToken] = React.useState("")
    const [isAuth,setIsAuth] = React.useState(false)
    const [isLoading,setIsLoading] = React.useState(false)
  const [isError,setisError] = React.useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsLoading(true)
        setisError(false)
        loginUser({email,password})
        .then(res =>{
            setIsAuth(true)
            setToken(res.data.token)
        }).catch((err)=>{
            setisError(true)
        }).finally(()=>{
            setIsLoading(false)
        })
    }
    if(isAuth){
        return(
            <div>
                <h1>
                    Login Successful ! Welcome to Dashboard
                </h1>
                <h2>Token:{token}</h2>
            </div>
        )
    }
    return (
        <form onSubmit = {handleSubmit}>
            {isError && "something went wrong"}
            <div>
                <label>
                    Email:{" "}
                    Email:<input type="email" onChange = {e =>setEmail(e.target.value)}   placeholder = "email"/>
                </label>
            </div>
            <div>
                <label>
                    Password:{" "}
                    Password:<input type="password"  onChange = {e =>setPassword(e.target.value)} placeholder = "Password"/>
                </label>
            </div>
            <div>
                <input type="submit"/>
            </div>
        </form>
    )
}

export {Login}