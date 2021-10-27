const axios = require('axios')

function fetchUsers(query,page){
  if(!query){
    return new Promise.reject("query should be provided")
    
  }
  return axios.get("https://api.github.com/search/users",{
    params:{
      q:query,
      page:1,     /// Page Number
      per_page:5 ////limit results(how many results per page)
    }
  })
}
export {fetchUsers}