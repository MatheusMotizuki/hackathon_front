import {apiRequest} from "./baseApi.js";

export function login(email, password) {
    return apiRequest('post', 'auth/login', {
        email: email,
        password: password
    })
}
