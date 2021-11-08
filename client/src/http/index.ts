import axios from 'axios'

export const API_URL = `http://192.168.0.104:5000/api`

const $api = axios.create({
    baseURL: API_URL
})

export default $api