import axios from "axios";

export const apiSearch = axios.create({
    baseURL: 'https://api.mercadolibre.com/sites/MLA/'
})

export const apiShowItem = axios.create({
    baseURL: 'https://api.mercadolibre.com/items/'
})
