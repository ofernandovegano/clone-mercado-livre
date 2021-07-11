import axios from "axios";

export const apiBackend = axios.create({
    baseURL: '/api/items'
})

