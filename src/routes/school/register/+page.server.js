import axios from "axios";
import {userStore} from "../../../stores.js";
import {error, redirect} from "@sveltejs/kit";
import {backendUrl} from "$lib/server/constants.js";

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData()
        const name = formData.get('name')
        const email = formData.get('email')
        const cep = formData.get('cep')
        const cellPhone = formData.get('cellPhone')

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: backendUrl + 'school',
            headers: {
                'Content-Type': 'application/json'
            },
            data : JSON.stringify({
                email: email,
                name: name,
                cep: cep,
                cellPhone: cellPhone

            })
        };

        let result = await axios.request(config).catch((error) => {
            console.log(error)
        })

        console.log(result.data)
    },
};
