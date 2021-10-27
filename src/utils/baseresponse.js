// For GET requests

import axios from "axios"
axios.interceptors.request.use(
    (req) => {
       // Add configurations here
       return req;
    },
    (err) => {
       return Promise.reject(err);
    }
 );

 