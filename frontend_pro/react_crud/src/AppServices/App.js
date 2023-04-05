import axios from 'axios'

const url = 'http://localhost:8000'

export const saveuser = (data) =>{
    return axios.post(`${url}/app1/product`,data)

}

export const login = (data) =>{
    return axios.post(`${url}/token`,data)
 
}