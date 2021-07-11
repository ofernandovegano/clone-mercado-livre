import axios from "axios";

export const apiBackend = axios.create({
    baseURL: 'https://api-backend-meli.herokuapp.com/api/items'
})

