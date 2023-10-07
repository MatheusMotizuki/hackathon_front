import axios from 'axios'
import { error } from '@sveltejs/kit';

const baseApi = axios.create({
    baseURL: "http://10.0.7.10/api/v1/"
})

export async function apiRequest(method, url, data=null, headers=null) {
    return baseApi({
        method: method,
        url: url,
        data: data,
        headers: headers
    })
        .then(response => response.data)
        .catch(err => {
            throw error(err.response.status, err.response.data)
        })
}