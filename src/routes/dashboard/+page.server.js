import {get} from "svelte/store";
import {userStore} from "../../stores.js";
import axios from "axios";
import {backendUrl} from "$lib/server/constants.js";
import {redirect} from "@sveltejs/kit";

export async function load({ params }) {
    const user = get(userStore);

    async function getSchools() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: backendUrl + 'school/distance/' + user.Id + '?distance=100',
            headers: {
                'Authorization': 'Bearer ' + user.token,
                'Content-Type': 'application/json'
            },
        };

        let result = await axios.request(config).catch((error) => {
            throw redirect(302, "/logout")
        });
        return result.data;
    }
    async function getUserCoords() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: backendUrl + 'users/' + user.Id,
            headers: {
                'Authorization': 'Bearer ' + user.token,
                'Content-Type': 'application/json'
            },
        };

        let result = await axios.request(config).catch((error) => {
            throw redirect(302, "/logout")
        });

        return { latitude: result.data.latitude, longitude: result.data.longitude}
    }

    return {
        userCoords: getUserCoords(),
        schools: getSchools()
    }
}