import axios, { Axios } from "axios";

function loginUser({email,password}){
    if(!email || !password){
       return Promise.reject("Email or Password is missing")
    }
    const config = {
        method:"post",
        data:{
            email,
            password
        },
        url:"https://reqres.in/api/login"
    }
    return axios(config )
}

export {loginUser}