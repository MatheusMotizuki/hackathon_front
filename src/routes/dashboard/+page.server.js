import {get} from "svelte/store";
import {userStore} from "../../stores.js";
import axios from "axios";

export async function load({ params }) {
    const user = get(userStore);
    async function getSchools() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://10.0.7.10:8080/api/v1/school/distance/' + user.Id + '?distance=100',
            headers: {
                'Authorization': 'Bearer ' + user.token,
                'Content-Type': 'application/json'
            },
        };

        let result = await axios.request(config);
        return result.data;
    }
    async function getUserCoords() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://10.0.7.10:8080/api/v1/users/' + user.Id,
            headers: {
                'Authorization': 'Bearer ' + user.token,
                'Content-Type': 'application/json'
            },
        };

        let result = await axios.request(config);

        return { latitude: result.data.latitude, longitude: result.data.longitude}
    }
    return {
        userCoords: getUserCoords(),
        schools: getSchools()
    }
}